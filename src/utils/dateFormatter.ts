import { format, formatDistanceToNow } from "date-fns";
import { parse } from "date-fns/parse";

import { ptBR } from "date-fns/locale/pt-BR";

export function formatDateToString(date: string) {
  return format(
    parse(date, "yyyy-MM-dd'T'HH:mm:ssX", new Date()),
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
}

export function getDateRelativeFromNow(date: string) {
  return formatDistanceToNow(
    parse(date, "yyyy-MM-dd'T'HH:mm:ssX", new Date()),

    {
      locale: ptBR,
      addSuffix: true,
    }
  );
}
