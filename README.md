# yamldiff

**Compares two YAML files and outputs the differences between them.**

```
'##:::'##::::'###::::'##::::'##:'##:::::::'########::'####:'########:'########:
. ##:'##::::'## ##::: ###::'###: ##::::::: ##.... ##:. ##:: ##.....:: ##.....::
:. ####::::'##:. ##:: ####'####: ##::::::: ##:::: ##:: ##:: ##::::::: ##:::::::
::. ##::::'##:::. ##: ## ### ##: ##::::::: ##:::: ##:: ##:: ######::: ######:::
::: ##:::: #########: ##. #: ##: ##::::::: ##:::: ##:: ##:: ##...:::: ##...::::
::: ##:::: ##.... ##: ##:.:: ##: ##::::::: ##:::: ##:: ##:: ##::::::: ##:::::::
::: ##:::: ##:::: ##: ##:::: ##: ########: ########::'####: ##::::::: ##:::::::
:::..:::::..:::::..::..:::::..::........::........:::....::..::::::::..::::::::
```

The `yamldiff` script is a simple command-line tool that allows you to compare two YAML files and see the differences between them. YAML is a popular data serialization format that is used for configuration files, data exchange, and other purposes. When trying to debug a problem with a configuration file or when you want to see how a YAML file has changed over time, 'yamldiff' can be quite useful.

The `yamldiff` script is easy to use. You simply run the script with the names of the two YAML files that you want to compare. The script will then show you the differences between the two files, highlighting the changes in color. This makes it easy to see what has changed between the two files and to quickly identify any issues that may be causing problems.

Overall, `yamldiff` is a useful tool for anyone who frequently works with YAML files. Whether you are a developer, a system administrator, or a technical writer, it can help you quickly and easily compare YAML files and identify any issues that may be causing problems.

## Installation

To install `yamldiff`, run the following command:

```bash
npm install yamldiff
```

## Usage

To use `yamldiff`, run the following command:

```bash
node yamldiff.js <file1> <file2>
```

Where `<file1>` and `<file2>` are the pathnames of the YAML files you want to compare.

`yamldiff` will normalize the two YAML files and then compare them. It will ignore comments and whitespaces, and it will be smart enough to compare a value that in one file is written on a single line, and in the other file is written on multiple lines. If there are no differences between the two files, `yamldiff` will display a message saying that the two files are identical in content.

## Examples

```bash
$ node yamldiff.js file1.yaml file2.yaml
The two files are different.
Differences:
- name: John
+ name: Jane
  age: 30
```

When `yamldiff` normalizes the two YAML files, it converts them to a canonical form that is easier to compare. This means that two YAML files that are semantically equivalent but have different formatting or structure will be considered identical in content by `yamldiff`.

For example, consider the following two YAML files:

```yaml
name: John
age: 30
# An extra comment
```

```yaml
name: John
age: 30
```

These two files are semantically equivalent, but they have different formatting. `yamldiff` will normalize these files and compare them, and will consider them to be identical in content.

Another example is when two YAML files have the same data but in a different order. For example:

```yaml
name: John
age: 30
```

```yaml
age: 30
name: John
```

Again, these two files are semantically equivalent, but they have the data in a different order. `yamldiff` will normalize these files and compare them, and will consider them to be identical in content.

## License

`yamldiff` is licensed under the MIT License. See `LICENSE` for more information.
