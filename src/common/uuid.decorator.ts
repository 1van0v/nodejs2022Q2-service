import { Param, ParseUUIDPipe } from '@nestjs/common';

export const Uuid = () => Param('id', new ParseUUIDPipe());
