create table
  public.hangman_games (
    id uuid not null default uuid_generate_v4 (),
    created_at timestamp with time zone not null default now(),
    word text not null,
    lives_remaining smallint not null default '6'::smallint,
    win boolean null,
    letters_guessed array not null default '{}'::text[],
    constraint hangman_games_pkey primary key (id)
  ) tablespace pg_default;
