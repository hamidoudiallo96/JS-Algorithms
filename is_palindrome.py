def is_palindrome(str):
    i = len(str) -1
    test_str = ""
    while i>=0:
        test_str += str[i]
        i-=1

    return str == test_str


print(is_palindrome("level"))
print(is_palindrome(("madam")))