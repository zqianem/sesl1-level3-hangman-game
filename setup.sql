create table
  public.hangman_players (
    id uuid not null default uuid_generate_v4 (),
    created_at timestamp with time zone null default now(),
    username text not null,
    constraint hangman_users_pkey primary key (id)
  ) tablespace pg_default;

create table
  public.hangman_games (
    id uuid not null default uuid_generate_v4 (),
    created_at timestamp with time zone not null default now(),
    word text not null,
    lives_remaining smallint not null default '6'::smallint,
    win boolean null,
    letters_guessed array not null default '{}'::text[],
    player uuid null,
    constraint hangman_games_pkey primary key (id),
    constraint hangman_games_player_fkey foreign key (player) references hangman_players (id) on delete cascade
  ) tablespace pg_default;
