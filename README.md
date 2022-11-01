# pthk

path kit. simply a nodejs `path` module with additional method:

 - `rectify(name)`: for a given relative path `name`:
   - return a trimmed path with special characters removed and relative paths such as `..` normalized.
   - always return a relative path instead of absolute path beginned with `/`.


## License

MIT
