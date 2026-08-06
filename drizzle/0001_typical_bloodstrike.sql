CREATE TABLE `lumio_memories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`memory_key` text NOT NULL,
	`memory_value` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lumio_memories_memory_key_unique` ON `lumio_memories` (`memory_key`);--> statement-breakpoint
CREATE TABLE `lumio_messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`role` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_lumio_messages_created_at` ON `lumio_messages` (`created_at`);