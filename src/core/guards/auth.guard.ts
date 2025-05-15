import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
//import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest(); //
    // o objetivo é pegar o token no header da requisição
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      // retorna o payload - foi escolhido checkToken
      // em vez de is validToken porque retorna mais dados
      const payload = this.authService.checkToken(token);
      //cria essa propriedade chamada tokenPayload  no HEAD do request e nela
      // é inserido o payload,  para ser usada em outros lugares
      // request.tokenPayload = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
