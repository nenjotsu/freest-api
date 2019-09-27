import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response, NextFunction } from 'express';
import { getJwks } from '../config/webserver/config.jwks';

interface Error {
  status: number;
  message: string;
  inner: any;
}

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  private jwks = getJwks();

  private expressJwtSecretConfig = {
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: this.jwks.jwksUri,
  };

  private jwtConfig = {
    secret: expressJwtSecret(this.expressJwtSecretConfig),
    audience: this.jwks.audience,
    issuer: this.jwks.issuer,
    algorithm: this.jwks.algorithm,
    credentialsRequired: true,
  };

  private handleError(res: Response, err: Error) {
    if (err) {
      const status = err.status || 500;
      const defaultMessage = 'Sorry, we were unable to process your request.';
      const message = err.message || defaultMessage;
      return res.status(status).send({
        ...err.inner,
        message,
      });
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    jwt(this.jwtConfig)(req, res, err => {
      this.handleError(res, err);
      next();
    });
  }
}
