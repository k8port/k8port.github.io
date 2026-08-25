# Vim Multi-Line Editing Cheat Sheet

This cheat sheet documents Vim commands for efficient multi-line editing and formatting.

## Formatting Commands

| Command    | Action                                         |
| ---------- | ---------------------------------------------- |
| `gg=G`     | Format entire document                         |
| `gq`       | Quick format document (custom mapping)         |
| `==`       | Format current line                            |
| `<Space>f` | Format document using leader key               |
| `ctrl+;`   | Force Prettier formatting (custom key binding) |

## Multi-Line Editing in Vim

### Visual Block Mode (Column Selection)

1. Press `Ctrl+v` to enter visual block mode
2. Move cursor to select columns of text
3. Press `I` to insert at beginning of block
4. Type your text
5. Press `Esc` twice to apply to all lines
6. Alternatively, press `A` to append after block
7. For deletion, press `d` after selecting

### Find and Replace

1. Use `:%s/old/new/g` to replace all occurrences
2. Use `:%s/old/new/gc` to confirm each replacement
3. Use `:#,#s/old/new/g` to replace between lines # and #

### Line Operations

1. Use `dd` to delete current line
2. Use `yy` to yank (copy) current line
3. Use `p` to paste after cursor
4. Use `P` to paste before cursor

### Multiple Lines with Numeric Prefix

1. Use `5dd` to delete 5 lines
2. Use `3yy` to yank 3 lines
3. Use `10j` to move down 10 lines

### Indentation

1. Use `>>` to indent current line
2. Use `<<` to dedent current line
3. Select lines in visual mode with `V` then use `>` to indent
4. Use `5>>` to indent 5 lines

### Visual Line Mode

1. Press `V` to enter visual line mode
2. Move to select entire lines
3. Use `y` to yank, `d` to delete, `>` to indent

### Macros for Repeated Edits

1. Use `qa` to start recording to register 'a'
2. Perform your editing commands
3. Press `q` to stop recording
4. Use `@a` to replay the macro
5. Use `5@a` to replay 5 times

### Multiple File Operations

1. Use `:argdo %s/old/new/g | update` to replace in all files in arguments list
2. Use `:bufdo %s/old/new/g | update` to replace in all buffers

## Useful Formatting Commands

| Shortcut      | Action                          |
| ------------- | ------------------------------- |
| `Cmd+F`       | Format Document                 |
| `Cmd+Shift+I` | Format Document (Alternative)   |
| `Ctrl+Alt+F`  | Format Document (Alternative 2) |
| `Ctrl+;`      | Force Prettier Format           |

## Custom Vim Features

- Uses space as leader key
- Automatically saves system clipboard
- Smart indentation enabled
- Tab width set to 2 spaces
