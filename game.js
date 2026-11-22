// Word + code data. Edit these lists freely to add your own words.
const WORDLIST={
  easy:["if", "else", "elif", "for", "while", "break", "continue", "pass", "def", "return", "class", "import", "from", "as", "in", "is", "not", "and", "or", "True", "False", "None", "try", "except", "finally", "with", "del", "global", "lambda", "print", "input", "len", "range", "int", "str", "float", "bool", "list", "dict", "set", "tuple", "type", "sum", "min", "max", "abs", "round", "open", "sorted", "reversed", "zip", "map", "filter", "any", "all", "id", "chr", "ord", "hex", "oct", "bin", "pow", "help", "dir", "format", "iter", "next", "object", "bytes", "python", "script", "code", "syntax", "indent", "colon", "comma", "bracket", "brace", "quote", "equals", "plus", "minus", "multiply", "divide", "modulo", "power", "assign", "compare", "operator", "variable", "value", "string", "number", "integer", "boolean", "decimal", "text", "character", "letter", "word", "line", "sentence", "name", "age", "count", "total", "result", "answer", "score", "price", "quantity", "array", "index", "item", "items", "key", "keys", "values", "element", "length", "size", "empty", "first", "last", "previous", "append", "insert", "remove", "pop", "clear", "copy", "sort", "reverse", "extend", "update", "get", "add", "discard", "join", "split", "strip", "lower", "upper", "title", "replace", "find", "startswith", "endswith", "isdigit", "isalpha", "capitalize", "loop", "condition", "statement", "expression", "function", "method", "parameter", "argument", "module", "package", "library", "file", "folder", "path", "read", "write", "close", "comment", "error", "bug", "debug", "test", "run", "output", "user", "data", "table", "repeat", "iterate", "check", "random", "math", "time", "date", "today", "year", "month", "day", "hour", "minute", "second", "true", "false", "none", "null", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white", "cat", "dog", "bird", "fish", "apple", "mango", "banana", "grape", "lemon", "hello", "world", "rocks", "love", "learn", "fast", "speed", "game", "play", "win", "level", "start", "stop"],
  medium:["nonlocal", "yield", "assert", "raise", "enumerate", "isinstance", "issubclass", "getattr", "setattr", "hasattr", "delattr", "callable", "globals", "locals", "vars", "exec", "eval", "compile", "breakpoint", "memoryview", "bytearray", "frozenset", "super", "property", "staticmethod", "classmethod", "divmod", "complex", "slice", "repr", "hash", "ascii", "os", "sys", "re", "json", "datetime", "collections", "itertools", "functools", "pathlib", "logging", "argparse", "subprocess", "threading", "socket", "sqlite3", "csv", "pickle", "shutil", "glob", "typing", "enum", "textwrap", "fractions", "statistics", "heapq", "bisect", "queue", "struct", "hashlib", "hmac", "secrets", "uuid", "base64", "zlib", "gzip", "zipfile", "tarfile", "tempfile", "platform", "getpass", "signal", "select", "unittest", "doctest", "pprint", "contextlib", "abc", "dataclasses", "weakref", "gc", "inspect", "traceback", "warnings", "urllib", "http", "smtplib", "email", "html", "xml", "tkinter", "turtle", "calendar", "locale", "codecs", "unicodedata", "numpy", "pandas", "scipy", "matplotlib", "seaborn", "sklearn", "tensorflow", "pytorch", "keras", "flask", "django", "fastapi", "requests", "beautifulsoup", "selenium", "pytest", "pillow", "opencv", "sqlalchemy", "celery", "redis", "pygame", "kivy", "scrapy", "jupyter", "pip", "virtualenv", "conda", "generator", "iterator", "decorator", "comprehension", "exception", "inheritance", "polymorphism", "encapsulation", "abstraction", "constructor", "destructor", "attribute", "instance", "recursion", "closure", "scope", "namespace", "keyword", "positional", "unpacking", "slicing", "indexing", "mutable", "immutable", "hashable", "iterable", "sequence", "mapping", "splitlines", "lstrip", "rstrip", "isalnum", "isupper", "islower", "casefold", "zfill", "ljust", "rjust", "center", "partition", "rpartition", "expandtabs", "translate", "maketrans", "setdefault", "popitem", "fromkeys", "intersection", "union", "difference", "symmetric_difference", "issubset", "issuperset", "readline", "readlines", "writelines", "seek", "tell", "flush", "truncate", "encode", "decode", "reduce", "accumulate", "chain", "product", "permutations", "combinations", "groupby", "islice", "cycle", "defaultdict", "OrderedDict", "Counter", "deque", "ChainMap", "namedtuple", "dictionary", "randint", "choice", "shuffle", "sample", "uniform", "seed", "sqrt", "ceil", "floor", "factorial", "gcd", "pi", "strftime", "strptime", "timedelta", "timezone", "sleep", "perf_counter", "dumps", "loads", "dump", "load", "connect", "cursor", "execute", "fetchall", "commit", "rollback", "post", "put", "delete", "status", "headers", "cookies", "session", "timeout", "virtual", "environment", "interpreter", "bytecode"],
  hard:["__init__", "__new__", "__del__", "__repr__", "__str__", "__bytes__", "__format__", "__hash__", "__bool__", "__getattr__", "__getattribute__", "__setattr__", "__delattr__", "__dir__", "__get__", "__set__", "__delete__", "__slots__", "__call__", "__len__", "__getitem__", "__setitem__", "__delitem__", "__missing__", "__iter__", "__next__", "__reversed__", "__contains__", "__add__", "__sub__", "__mul__", "__matmul__", "__truediv__", "__floordiv__", "__mod__", "__divmod__", "__pow__", "__lshift__", "__rshift__", "__and__", "__or__", "__xor__", "__neg__", "__pos__", "__abs__", "__invert__", "__eq__", "__ne__", "__lt__", "__le__", "__gt__", "__ge__", "__enter__", "__exit__", "__await__", "__aiter__", "__anext__", "__aenter__", "__aexit__", "__name__", "__main__", "__doc__", "__dict__", "__class__", "__module__", "__file__", "__all__", "__version__", "__annotations__", "__init_subclass__", "__class_getitem__", "__prepare__", "__mro__", "__bases__", "__subclasses__", "__qualname__", "metaclass", "coroutine", "asyncio", "await", "async", "multiprocessing", "concurrent", "futures", "executor", "semaphore", "mutex", "deadlock", "concurrency", "parallelism", "synchronization", "asynchronous", "throughput", "latency", "cpython", "pypy", "cython", "numba", "garbage", "refcount", "finalizer", "buffer", "protocol", "descriptor", "linearization", "metaprogramming", "introspection", "reflection", "monkeypatch", "contextmanager", "partial", "lru_cache", "singledispatch", "cached_property", "dataclass", "typeddict", "typevar", "overload", "annotation", "literal", "classvar", "aiohttp", "uvloop", "pydantic", "alembic", "kafka", "pyspark", "dask", "polars", "ctypes", "cffi", "mypy", "pylint", "flake8", "isort", "tox", "poetry", "setuptools", "wheel", "pyinstaller", "nuitka", "memoization", "serialization", "deserialization", "idempotent", "immutability", "profiling", "benchmark", "tracemalloc", "cprofile", "timeit", "pdb", "debugger", "coverage", "fixture", "parametrize", "mocking", "starmap", "zip_longest", "compress", "dropwhile", "takewhile", "filterfalse", "pairwise", "batched", "importlib", "pkgutil", "sysconfig", "runpy", "ast", "dis", "tokenize", "symtable", "wraps", "total_ordering", "cmp_to_key", "UserDict", "UserList", "getattr_static", "signature", "isgenerator", "iscoroutine", "currentframe", "stack", "getmembers", "composition", "aggregation", "delegation", "mixin", "interface", "abstractmethod", "abstractproperty", "singleton", "factory", "observer", "adapter", "trie", "graph", "backtracking", "memo", "dynamic", "programming", "sys_exit", "atexit", "sigint", "sigterm", "popen", "stdin", "stdout", "stderr", "pipe", "fork", "spawn", "unicode", "utf8", "codec", "surrogate", "normalization", "grapheme", "tracebacks", "exceptions", "stacktrace", "reraise", "suppress", "ExceptionGroup", "contextvars", "taskgroup", "walrus", "ellipsis", "starred", "kwonly", "posonly"]
};
const PROGLIST={
  easy:[
    ["name = \"Sam\"", "age = 20", "print(name, age)"],
    ["x = 5", "y = 10", "total = x + y", "print(total)"],
    ["for i in range(3):", "    print(\"Hello\")"],
    ["fruits = [\"apple\", \"mango\"]", "fruits.append(\"kiwi\")", "print(len(fruits))"],
    ["x = 7", "if x > 5:", "    print(\"big\")", "else:", "    print(\"small\")"],
    ["a = 4", "b = 2", "print(a * b)", "print(a / b)"],
    ["word = \"python\"", "print(word.upper())", "print(len(word))"],
    ["count = 0", "while count < 3:", "    count += 1", "print(count)"],
    ["nums = [3, 1, 2]", "nums.sort()", "print(nums)"],
    ["city = input(\"City: \")", "print(\"Hi\", city)"],
    ["for n in [1, 2, 3]:", "    print(n * 2)"],
    ["price = 9.5", "qty = 3", "print(price * qty)"],
    ["is_ok = True", "if is_ok:", "    print(\"yes\")"],
    ["text = \"hello world\"", "print(text.title())"],
    ["colors = (\"red\", \"blue\")", "print(colors[0])"],
    ["age = 18", "if age >= 18:", "    print(\"adult\")"],
    ["total = 0", "for i in range(5):", "    total += i", "print(total)"],
    ["x = 10", "x -= 3", "print(x)"],
    ["user = {\"name\": \"Ali\"}", "print(user[\"name\"])"],
    ["print(\"Hello, World!\")"],
    ["a, b = 1, 2", "a, b = b, a", "print(a, b)"],
    ["s = \"abc\"", "print(s[0])", "print(s[-1])"],
    ["data = [1, 2, 3]", "print(sum(data))", "print(max(data))"],
    ["n = 4", "print(n % 2 == 0)"],
    ["pets = {\"cat\", \"dog\"}", "pets.add(\"fish\")", "print(len(pets))"],
    ["name = \"Sara\"", "print(f\"Hi {name}\")"],
    ["import math", "print(math.sqrt(16))"],
    ["for ch in \"hey\":", "    print(ch)"],
    ["x = int(\"42\")", "print(x + 1)"],
    ["empty = []", "empty.append(1)", "print(empty)"],
    ["temp = 30", "if temp > 25:", "    print(\"hot\")", "elif temp > 15:", "    print(\"warm\")", "else:", "    print(\"cold\")"],
    ["items = [\"a\", \"b\", \"c\"]", "for i in range(len(items)):", "    print(i, items[i])"],
    ["msg = \"python\"", "print(msg * 2)", "print(msg[1:4])"]
  ],
  medium:[
    ["def greet(name):", "    return f\"Hello, {name}!\"", "print(greet(\"Ali\"))"],
    ["nums = [1, 2, 3, 4, 5]", "total = 0", "for n in nums:", "    total += n", "print(total)"],
    ["import random", "dice = random.randint(1, 6)", "if dice == 6:", "    print(\"Lucky!\")", "else:", "    print(\"Try again\")"],
    ["scores = {\"ali\": 90, \"sara\": 85}", "for name, score in scores.items():", "    print(name, score)"],
    ["count = 0", "while count < 3:", "    print(count)", "    count += 1"],
    ["with open(\"notes.txt\") as f:", "    for line in f:", "        print(line.strip())"],
    ["def is_even(n):", "    return n % 2 == 0", "print([n for n in range(6) if is_even(n)])"],
    ["words = [\"a\", \"bb\", \"ccc\"]", "lengths = list(map(len, words))", "print(lengths)"],
    ["try:", "    num = int(\"abc\")", "except ValueError:", "    print(\"not a number\")"],
    ["class Dog:", "    def __init__(self, name):", "        self.name = name", "dog = Dog(\"Rex\")", "print(dog.name)"],
    ["from collections import Counter", "c = Counter(\"banana\")", "print(c.most_common(1))"],
    ["import json", "data = {\"a\": 1}", "print(json.dumps(data))"],
    ["def add(a, b=2):", "    return a + b", "print(add(5))"],
    ["names = [\"zoe\", \"adam\"]", "names.sort(key=len)", "print(names)"],
    ["text = \"a,b,c\"", "parts = text.split(\",\")", "print(parts)"],
    ["squares = {n: n * n for n in range(4)}", "print(squares)"],
    ["def fact(n):", "    if n <= 1:", "        return 1", "    return n * fact(n - 1)", "print(fact(5))"],
    ["import time", "start = time.time()", "print(round(time.time() - start, 2))"],
    ["pairs = list(zip([1, 2], [\"a\", \"b\"]))", "print(pairs)"],
    ["matrix = [[1, 2], [3, 4]]", "for row in matrix:", "    print(sum(row))"],
    ["def stats(*args):", "    return min(args), max(args)", "print(stats(3, 1, 2))"],
    ["from datetime import date", "today = date.today()", "print(today.year)"],
    ["evens = [x for x in range(10) if x % 2 == 0]", "print(evens)"],
    ["s = \"level\"", "print(s == s[::-1])"],
    ["total = sum(x * 2 for x in range(5))", "print(total)"],
    ["import os", "files = os.listdir(\".\")", "print(len(files))"],
    ["def divide(a, b):", "    try:", "        return a / b", "    except ZeroDivisionError:", "        return None"],
    ["stack = []", "stack.append(1)", "stack.append(2)", "print(stack.pop())"],
    ["class Car:", "    wheels = 4", "    def drive(self):", "        print(\"vroom\")", "Car().drive()"]
  ],
  hard:[
    ["class Dog:", "    def __init__(self, name):", "        self.name = name", "    def bark(self):", "        return f\"{self.name} says woof\"", "pup = Dog(\"Rex\")", "print(pup.bark())"],
    ["def fib(n):", "    a, b = 0, 1", "    for _ in range(n):", "        yield a", "        a, b = b, a + b", "print(list(fib(8)))"],
    ["squares = [n ** 2 for n in range(10)]", "evens = [x for x in squares if x % 2 == 0]", "lookup = {k: v for k, v in zip(\"abc\", evens)}", "print(lookup)"],
    ["def timer(func):", "    def wrapper(*args, **kwargs):", "        result = func(*args, **kwargs)", "        print(\"done\")", "        return result", "    return wrapper"],
    ["try:", "    value = int(input())", "except ValueError as e:", "    print(f\"Bad input: {e}\")", "finally:", "    print(\"bye\")"],
    ["from functools import lru_cache", "@lru_cache(maxsize=None)", "def fib(n):", "    return n if n < 2 else fib(n - 1) + fib(n - 2)", "print(fib(30))"],
    ["class Stack:", "    def __init__(self):", "        self.items = []", "    def push(self, x):", "        self.items.append(x)", "    def pop(self):", "        return self.items.pop()"],
    ["import asyncio", "async def main():", "    await asyncio.sleep(1)", "    print(\"done\")", "asyncio.run(main())"],
    ["from dataclasses import dataclass", "@dataclass", "class Point:", "    x: int", "    y: int", "print(Point(1, 2))"],
    ["class Vec:", "    def __init__(self, x, y):", "        self.x, self.y = x, y", "    def __add__(self, o):", "        return Vec(self.x + o.x, self.y + o.y)"],
    ["from contextlib import contextmanager", "@contextmanager", "def tag(name):", "    print(f\"<{name}>\")", "    yield", "    print(f\"</{name}>\")"],
    ["def gen_primes(limit):", "    for n in range(2, limit):", "        if all(n % d for d in range(2, int(n ** .5) + 1)):", "            yield n"],
    ["from collections import defaultdict", "groups = defaultdict(list)", "for w in [\"ant\", \"bee\", \"ape\"]:", "    groups[w[0]].append(w)", "print(dict(groups))"],
    ["import itertools", "for combo in itertools.combinations(\"abc\", 2):", "    print(\"\".join(combo))"],
    ["class Meta(type):", "    def __new__(mcs, name, bases, ns):", "        ns[\"tag\"] = name.lower()", "        return super().__new__(mcs, name, bases, ns)"],
    ["def memo(f):", "    cache = {}", "    def inner(n):", "        if n not in cache:", "            cache[n] = f(n)", "        return cache[n]", "    return inner"],
    ["import threading", "def work(n):", "    print(f\"worker {n}\")", "ts = [threading.Thread(target=work, args=(i,)) for i in range(3)]", "for t in ts:", "    t.start()"],
    ["class Temp:", "    @property", "    def kelvin(self):", "        return self._c + 273.15", "    @kelvin.setter", "    def kelvin(self, v):", "        self._c = v - 273.15"],
    ["def flatten(xs):", "    for x in xs:", "        if isinstance(x, list):", "            yield from flatten(x)", "        else:", "            yield x"],
    ["from typing import Optional", "def find(items: list[int], x: int) -> Optional[int]:", "    return items.index(x) if x in items else None"],
    ["import re", "m = re.search(r\"(\\d+)-(\\d+)\", \"10-20\")", "print(m.group(1), m.group(2))"],
    ["class Node:", "    def __init__(self, val, nxt=None):", "        self.val = val", "        self.next = nxt", "head = Node(1, Node(2, Node(3)))"],
    ["def retry(times):", "    def deco(fn):", "        def run(*a, **k):", "            for _ in range(times):", "                try:", "                    return fn(*a, **k)", "                except Exception:", "                    pass", "        return run", "    return deco"],
    ["words = [\"apple\", \"bob\", \"cat\"]", "result = sorted(words, key=lambda w: (len(w), w), reverse=True)", "print(result)"],
    ["import heapq", "heap = []", "for n in [5, 1, 3]:", "    heapq.heappush(heap, n)", "print(heapq.heappop(heap))"],
    ["class Shape:", "    def area(self):", "        raise NotImplementedError", "class Square(Shape):", "    def __init__(self, s):", "        self.s = s", "    def area(self):", "        return self.s ** 2"],
    ["def binary_search(arr, target):", "    lo, hi = 0, len(arr) - 1", "    while lo <= hi:", "        mid = (lo + hi) // 2", "        if arr[mid] == target:", "            return mid", "        lo, hi = (mid + 1, hi) if arr[mid] < target else (lo, mid - 1)", "    return -1"]
  ]
};
const CFG={easy:{s:.8,i:1.25},medium:{s:1,i:1},hard:{s:1.2,i:.85}};
const COLORS=['#3b8eea','#3ddc84','#a259ff','#f0a020'];
const $=id=>document.getElementById(id);
const field=$('field'),inp=$('inp'),snake=$('snake');
let mode='easy',words=[],running=false,paused=false,last=0,elapsed=0,spawnT=0,score=0,lives=3,best=0,hits=0,bad=0,streak=0;

// ----- settings + audio -----
const DEF={difficulty:'easy',speed:'normal',gmode:'classic',tlimit:60,density:'normal',ver:4,skin:'night',snake:'coder',keys:true,clickStyle:'mech',theme:'dark',accent:'#3b8eea',bg:true,music:70,sfx:80};
const SPEEDS={slow:.7,normal:1,fast:1.35,insane:1.7};
const SKINS=[
  {id:'night',n:'Night City',a:'#3b8eea',d:'The classic city after dark'},
  {id:'day',n:'Daylight',a:'#3b8eea',d:'Bright and clean light theme'},
  {id:'neon',n:'Neon Nights',a:'#ff4fa3',d:'Purple sky, pink glow'},
  {id:'matrix',n:'Matrix',a:'#2ecc71',d:'Green code rain vibes'},
  {id:'sunset',n:'Sunset',a:'#ffc83d',d:'Warm evening skyline'},
  {id:'ocean',n:'Deep Ocean',a:'#18c0ff',d:'Cool blue depths'}
];
const SNAKES=[
  {id:'coder',n:'Coder Python',g1:'#58a84a',g2:'#3b8238',g3:'#dbe58a',g4:'#e2e68a',g5:'#a68c69'},
  {id:'azure',n:'Azure',g1:'#3d86d6',g2:'#2a5fa3',g3:'#cfe6ff',g4:'#bfe0ff',g5:'#2f6fb5'},
  {id:'sun',n:'Golden',g1:'#f2b631',g2:'#c98a14',g3:'#fff0b0',g4:'#ffe27a',g5:'#d9822b'},
  {id:'grape',n:'Grape',g1:'#8a5cd6',g2:'#6137a8',g3:'#e4d4ff',g4:'#dcc8ff',g5:'#b0709f'},
  {id:'rose',n:'Rose',g1:'#ee6f9c',g2:'#c24673',g3:'#ffe0ec',g4:'#ffc2d9',g5:'#c2527e'}
];
const SNAKE_INNER='<ellipse cx="128" cy="225" rx="106" ry="8" fill="#000" opacity=".22"/><path d="M44 184A84 24 0 1 1 212 184A84 24 0 1 1 44 184" transform="translate(0 5)" pathLength="100" fill="none" stroke="var(--g2)" stroke-width="31"/><path d="M44 184A84 24 0 1 1 212 184A84 24 0 1 1 44 184" pathLength="100" fill="none" stroke="var(--g1)" stroke-width="31"/><path d="M44 184A84 24 0 1 1 212 184A84 24 0 1 1 44 184" pathLength="100" fill="none" stroke="var(--g4)" stroke-width="21" stroke-linecap="round" stroke-dasharray="1.6 10.9" stroke-dashoffset="-3"/><path d="M44 184A84 24 0 1 1 212 184A84 24 0 1 1 44 184" pathLength="100" fill="none" stroke="var(--g5)" stroke-width="14" stroke-linecap="round" stroke-dasharray="1.6 10.9" stroke-dashoffset="-3"/><path d="M120 182C94 164 110 124 120 98" fill="none" stroke="var(--g1)" stroke-width="40" stroke-linecap="round"/><path d="M120 182C94 164 110 124 120 98" fill="none" stroke="var(--g3)" stroke-width="18" stroke-linecap="round" transform="translate(-4 0)"/><ellipse cx="139" cy="132" rx="5.5" ry="9" fill="var(--g4)"/><ellipse cx="139" cy="132" rx="3.2" ry="6" fill="var(--g5)"/><path d="M70 64C68 30 94 12 122 12C152 12 174 32 172 62C170 90 148 104 120 104C92 104 72 92 70 64Z" fill="var(--g1)"/><path d="M80 72C84 94 102 104 122 104C144 104 160 94 164 72C150 86 96 86 80 72Z" fill="var(--g3)"/><g transform="rotate(-24 92 26)"><ellipse cx="92" cy="26" rx="12" ry="7.5" fill="var(--g4)"/><ellipse cx="92" cy="26" rx="8.5" ry="4.8" fill="var(--g5)"/></g><g transform="rotate(24 152 28)"><ellipse cx="152" cy="28" rx="12" ry="7.5" fill="var(--g4)"/><ellipse cx="152" cy="28" rx="8.5" ry="4.8" fill="var(--g5)"/></g><g class="eye"><circle cx="101" cy="54" r="12.5" fill="#fff"/><circle cx="103" cy="56" r="7.2" fill="#6b4a2b"/><circle cx="103" cy="56" r="3.8" fill="#16110b"/><circle cx="105" cy="53" r="1.9" fill="#fff"/></g><g class="eye"><circle cx="141" cy="54" r="12.5" fill="#fff"/><circle cx="143" cy="56" r="7.2" fill="#6b4a2b"/><circle cx="143" cy="56" r="3.8" fill="#16110b"/><circle cx="145" cy="53" r="1.9" fill="#fff"/></g><path d="M90 33Q100 27 111 32M131 32Q142 27 152 33" fill="none" stroke="var(--g2)" stroke-width="3.6" stroke-linecap="round"/><g fill="rgba(255,255,255,.1)" stroke="#d9a935" stroke-width="2.6"><circle cx="101" cy="54" r="17"/><circle cx="141" cy="54" r="17"/></g><path d="M117 50Q121 46 125 50M84 50L70 44M158 50L172 44" fill="none" stroke="#d9a935" stroke-width="2.6" stroke-linecap="round"/><circle cx="113" cy="78" r="1.7" fill="var(--g2)"/><circle cx="129" cy="78" r="1.7" fill="var(--g2)"/><path d="M104 90Q121 103 140 90" fill="none" stroke="#2d4a2b" stroke-width="2.6" stroke-linecap="round"/><path d="M116 96Q122 106 130 96Z" fill="#ff7f8a"/><path d="M10 88L88 106L88 172L16 154Z" fill="#9a9da3"/><path d="M10 88L88 106L88 112L10 94Z" fill="#b6b9bf"/><path d="M88 106L94 108L94 170L88 172Z" fill="#6e7178"/><g transform="translate(34 112) scale(.52)"><path d="M15.9 2C9 2 9.4 5 9.4 5v3.1H16V9H6.7S2 8.5 2 16c0 7.4 4.1 7.1 4.1 7.1h2.4v-3.4s-.1-4.1 4-4.1h6.6s3.8.1 3.8-3.7V5.8S23.5 2 15.9 2z" fill="#3776AB"/><path d="M16.1 30c6.9 0 6.5-3 6.5-3v-3.1H16V23h9.3S30 23.5 30 16c0-7.4-4.1-7.1-4.1-7.1h-2.4v3.4s.1 4.1-4 4.1h-6.6s-3.8-.1-3.8 3.7v6.2S8.5 30 16.1 30z" fill="#FFD43B"/></g><path d="M88 172L152 166L152 178L90 186Z" fill="#c7c9ce"/><path d="M90 186L152 178L152 182L90 191Z" fill="#6e7178"/><path d="M96 175L148 170" stroke="#8d9097" stroke-width="2" stroke-dasharray="5 3"/><path d="M96 179L148 174" stroke="#8d9097" stroke-width="2" stroke-dasharray="5 3"/><path d="M96 183L148 178" stroke="#8d9097" stroke-width="2" stroke-dasharray="5 3"/><path d="M124 190C112 196 98 192 94 184" fill="none" stroke="var(--g1)" stroke-width="15" stroke-linecap="round"/><path d="M212 182C226 176 226 160 212 158C204 157 202 166 208 168" fill="none" stroke="var(--g1)" stroke-width="12" stroke-linecap="round"/>';
const SNAKE=(k,s)=>'<svg viewBox="0 0 240 232" width="'+s+'" height="'+Math.round(s*232/240)+'" style="--g1:'+k.g1+';--g2:'+k.g2+';--g3:'+k.g3+';--g4:'+k.g4+';--g5:'+k.g5+'" aria-hidden="true">'+SNAKE_INNER+'</svg>';
$('snake').innerHTML=SNAKE_INNER;
const DENS={normal:{i:1,b:1,cap:10,s:1,n:1},high:{i:.6,b:2,cap:16,s:.9,n:2},extreme:{i:.33,b:3,cap:30,s:.8,n:4}};
const D=()=>DENS[S.density]||DENS.normal;
let S={...DEF},W={...DEF},timeLeft=60,wasRunning=false;
let saved={};try{saved=JSON.parse(localStorage.getItem('pyTypeSettings')||'{}')}catch(e){}
Object.assign(S,saved);
if(!(saved.ver>=3))S.density='normal';
S.ver=4;
if(!CFG[S.difficulty])S.difficulty='easy';
if(!DENS[S.density])S.density='normal';
if(!['mech','soft','type'].includes(S.clickStyle))S.clickStyle='mech';
if(!SKINS.some(k=>k.id===S.skin))S.skin='night';
if(!SNAKES.some(k=>k.id===S.snake))S.snake=SNAKES[0].id;
if(S.gmode==='endless')S.gmode='classic';if(S.gmode==='timed')S.gmode='time';
if(!['classic','time','code'].includes(S.gmode))S.gmode='classic';
if(!(+S.tlimit>0))S.tlimit=60;
mode=S.difficulty;
const saveS=()=>{try{localStorage.setItem('pyTypeSettings',JSON.stringify(S))}catch(e){}};
const timeTxt=()=>{
  if(S.gmode==='classic')return Math.floor(elapsed)+'s';
  const t=Math.ceil(timeLeft);return t>=60?Math.floor(t/60)+':'+String(t%60).padStart(2,'0'):t+'s';
};
const bestKey=()=>'pyTypeBest_'+mode+(S.gmode==='classic'?'':'_'+S.gmode+'_'+S.tlimit);
function applyLook(o){
  document.documentElement.dataset.theme=o.theme;
  document.documentElement.style.setProperty('--blue',o.accent);
  document.body.classList.toggle('nobg',!o.bg);
  document.documentElement.dataset.skin=o.skin==='day'?'night':o.skin;
  const sk=SNAKES.find(k=>k.id===o.snake)||SNAKES[0];
  ['g1','g2','g3','g4','g5'].forEach(v=>$('snake').style.setProperty('--'+v,sk[v]));
}
let AC=null;
function ac(){try{if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume()}catch(e){}return AC}
function tone(f,d,type,vol,when=0){
  const a=ac();if(!a||vol<=0)return;
  const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+when;
  o.type=type;o.frequency.value=f;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+d);
  o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d);
}
const sfx={
  hit(){const v=S.sfx/100;tone(660,.09,'square',.12*v);tone(990,.12,'square',.1*v,.07)},
  miss(){tone(140,.3,'sawtooth',.16*S.sfx/100)},
  bad(){tone(200,.12,'square',.1*S.sfx/100)},
  over(){[400,320,250,180].forEach((f,i)=>tone(f,.25,'triangle',.18*S.sfx/100,i*.18))}
};
sfx.tick=()=>tone(880,.03,'square',.035*S.sfx/100);
inp.addEventListener('keydown',()=>{if(running&&!paused){snake.classList.remove('tap');void snake.getBoundingClientRect();snake.classList.add('tap')}});
let NB=null;
function noiseBuf(){
  const a=ac();if(!a)return null;
  if(!NB){NB=a.createBuffer(1,Math.floor(a.sampleRate*.1),a.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
  return NB;
}
// keyboard click: a short noise burst (the "tick") plus a low body thump
function keyClick(kind){
  const a=ac(),v=S.sfx/100,nb=a&&noiseBuf();
  if(!a||!nb||v<=0)return;
  const st=S.clickStyle,big=kind==='space'||kind==='enter'||kind==='back',t=a.currentTime;
  const src=a.createBufferSource();src.buffer=nb;src.playbackRate.value=.9+Math.random()*.25;
  const f=a.createBiquadFilter();f.type=st==='soft'?'lowpass':'highpass';f.frequency.value=st==='soft'?1800:st==='type'?3500:2200;
  const g=a.createGain();
  g.gain.setValueAtTime((st==='soft'?.2:.32)*v*(big?1.25:1),t);
  g.gain.exponentialRampToValueAtTime(.001,t+(st==='type'?.05:.03));
  src.connect(f);f.connect(g);g.connect(a.destination);src.start(t);src.stop(t+.06);
  const o=a.createOscillator(),g2=a.createGain();
  o.type=st==='type'?'square':'sine';
  o.frequency.setValueAtTime(st==='type'?1300:big?130:180+Math.random()*40,t);
  if(st!=='type')o.frequency.exponentialRampToValueAtTime(70,t+.05);
  g2.gain.setValueAtTime((st==='type'?.05:.22)*v,t);g2.gain.exponentialRampToValueAtTime(.001,t+.06);
  o.connect(g2);g2.connect(a.destination);o.start(t);o.stop(t+.07);
}
const MEL=[440,0,523,0,659,523,440,0,392,0,494,0,587,494,392,0,349,0,440,0,523,440,349,0,392,0,494,587,659,0,587,0];
let mi=0,mt=null;
function musicStop(){clearInterval(mt);mt=null}
function musicStart(){
  musicStop();
  mt=setInterval(()=>{if(paused||!running)return;const f=MEL[mi++%MEL.length];if(f&&S.music>0)tone(f,.22,'triangle',.09*S.music/100)},230);
}
const $s=$('set');
function sync(){
  $('fDiff').value=W.difficulty;$('fSpeed').value=W.speed;$('fKeys').checked=W.keys;$('fStyle').value=W.clickStyle;$('fDens').value=W.density;$('fTheme').value=W.theme;
  $('fBg').checked=W.bg;$('fMusic').value=W.music;$('fSfx').value=W.sfx;
  document.querySelectorAll('.sw').forEach(b=>b.classList.toggle('on',b.dataset.c===W.accent));
  ['Music','Sfx'].forEach(k=>{const r=$('f'+k);r.style.setProperty('--p',r.value+'%');$('v'+k).textContent=r.value+'%'});
}
function openModal(){
  if(!$s.classList.contains('hide'))return;
  wasRunning=running&&!paused;if(wasRunning)paused=true;
  W={...S};sync();$s.classList.remove('hide');$('sSave').focus();
}
function closeModal(cancel){
  if($s.classList.contains('hide'))return;
  if(cancel)applyLook(S);
  $s.classList.add('hide');
  if(wasRunning){paused=false;inp.focus()}
  wasRunning=false;
}
[['fDiff','difficulty'],['fSpeed','speed'],['fStyle','clickStyle'],['fDens','density'],['fTheme','theme']].forEach(([id,k])=>$(id).onchange=e=>{W[k]=e.target.value;applyLook(W)});
inp.addEventListener('keydown',e=>{
  if(!S.keys||!running||paused||e.ctrlKey||e.metaKey||e.altKey)return;
  const k=e.key;
  if(k.length===1)keyClick(k===' '?'space':'key');
  else if(k==='Enter')keyClick('enter');
  else if(k==='Backspace')keyClick('back');
});
$('fKeys').onchange=e=>{W.keys=e.target.checked};
$('fStyle').addEventListener('change',()=>{const t=S.clickStyle;S.clickStyle=W.clickStyle;keyClick('key');S.clickStyle=t});
$('fBg').onchange=e=>{W.bg=e.target.checked;applyLook(W)};
document.querySelectorAll('.sw').forEach(b=>b.onclick=()=>{W.accent=b.dataset.c;applyLook(W);sync()});
['Music','Sfx'].forEach(k=>$('f'+k).oninput=e=>{W[k.toLowerCase()]=+e.target.value;sync()});
$('fSfx').onchange=()=>{const t=S.sfx;S.sfx=W.sfx;sfx.hit();S.sfx=t};
$('sSave').onclick=()=>{S={...W};saveS();applyLook(S);closeModal(false)};
$('sReset').onclick=()=>{W={...DEF,gmode:S.gmode,tlimit:S.tlimit};applyLook(W);sync()};
$('sX').onclick=()=>closeModal(true);
$s.addEventListener('pointerdown',e=>{if(e.target===$s)closeModal(true)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!$s.classList.contains('hide')){e.preventDefault();closeModal(true)}});
document.querySelectorAll('.snav>button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.snav>button').forEach(x=>x.classList.toggle('on',x===b));
  $('s-'+b.dataset.s).scrollIntoView({behavior:'smooth',block:'start'});
});
applyLook(S);

// scenery
(function(){
  const sky=$('sky');let h='';
  for(let i=0;i<40;i++)h+=`<i class="star" style="left:${Math.random()*100}%;top:${Math.random()*60}%"></i>`;
  for(let i=0;i<3;i++)h+=`<i class="cloud" style="left:${10+i*32+Math.random()*8}%;top:${14+Math.random()*30}%;width:${90+Math.random()*60}px"></i>`;
  let x=0;while(x<100){const w=3+Math.random()*4;h+=`<i class="bld" style="left:${x}%;width:${w}%;height:${60+Math.random()*130}px"></i>`;x+=w+.3}
  sky.innerHTML=h+'<div class="code mono">&lt;/&gt;</div>';
})();

function loadBest(){best=0;try{best=+localStorage.getItem(bestKey())||0}catch(e){}$('best').textContent=best}
const level=()=>1+Math.floor(elapsed/20);
const baseSpeed=()=>Math.min((40+elapsed*1.2)*CFG[mode].s*SPEEDS[S.speed]*D().s,440);
const interval=()=>Math.max(.22,(2.3-elapsed*.017)*CFG[mode].i*D().i);

function hud(){
  if(streak>gMax)gMax=streak;
  $('score').textContent=score;$('time').textContent=timeTxt();
  const t=hits+bad;$('acc').textContent=(t?Math.round(hits/t*100):100)+'%';
  $('streak').textContent=streak;$('wpm').textContent=Math.round(hits/5/Math.max(elapsed,5)*60);
  $('msg').textContent=streak>=8?'On fire!':streak>=3?'Nice rhythm!':'Keep going!';
  $('lives').textContent='♥'.repeat(lives)+'♡'.repeat(3-lives);
}

function spawn(extra=0){
  const cap=Math.min(D().cap,Math.max(6,Math.floor(field.clientWidth*field.clientHeight/22000)));
  if(words.length>=cap)return;
  const p=WORDLIST[mode].filter(w=>!words.some(o=>o.w===w));
  if(!p.length)return;
  const w=p[Math.floor(Math.random()*p.length)];
  const el=document.createElement('div');
  el.className='word mono';el.textContent=w;
  el.style.setProperty('--c',COLORS[Math.floor(Math.random()*4)]);
  field.appendChild(el);
  const pad=innerWidth>720?170:8,fw=field.clientWidth,ew=el.offsetWidth,span=Math.max(1,fw-ew-pad*2);
  let x=pad+Math.random()*span,bestGap=-1;
  for(let t=0;t<8;t++){
    const cx=pad+Math.random()*span;let gap=1e9;
    for(const o of words)if(o.y<110)gap=Math.min(gap,Math.max(cx-(o.x+o.ew),o.x-(cx+ew)));
    if(gap>bestGap){bestGap=gap;x=cx}
  }
  words.push({w,el,x,ew,y:-el.offsetHeight-extra,v:baseSpeed()*(.85+Math.random()*.3)});
}

function lowestMatch(v,exact){
  let b=null;
  for(const o of words){
    if((exact?o.w===v:o.w.startsWith(v))&&(!b||o.y>b.y))b=o;
  }
  return b;
}

function paint(){
  const v=inp.value,tgt=v?lowestMatch(v,false):null;
  for(const o of words){
    if(o===tgt){o.el.classList.add('lock');o.el.innerHTML='<span class="t"></span>';o.el.firstChild.textContent=v;o.el.append(o.w.slice(v.length))}
    else if(o.el.classList.contains('lock')){o.el.classList.remove('lock');o.el.textContent=o.w}
  }
}

function kill(o){
  words=words.filter(x=>x!==o);
  sfx.hit();hits++;streak++;score+=o.w.length*10+level()*5+Math.min(streak,10);
  o.el.classList.add('hit');o.el.style.transform=`translate(${o.x}px,${o.y-14}px)`;
  setTimeout(()=>o.el.remove(),220);
  inp.value='';hud();
  snake.classList.remove('hop');void snake.getBoundingClientRect();snake.classList.add('hop');
}

inp.addEventListener('input',()=>{
  if(!running||paused)return;
  if(S.gmode==='code'){codeInput();return}
  const v=inp.value.trim(),ex=lowestMatch(v,true);
  if(ex&&!words.some(o=>o.w!==v&&o.w.startsWith(v)))kill(ex);else paint();
});
inp.addEventListener('keydown',e=>{
  if(S.gmode==='code'){codeKey(e);return}
  if(e.key!=='Enter')return;
  e.preventDefault();
  if(!running||paused)return;
  const ex=lowestMatch(inp.value.trim(),true);
  if(ex)kill(ex);
  else{sfx.bad();bad++;streak=0;hud();inp.classList.add('bad');setTimeout(()=>inp.classList.remove('bad'),220);inp.value='';paint()}
});
field.addEventListener('pointerdown',()=>inp.focus());

function miss(o){
  words=words.filter(x=>x!==o);o.el.remove();
  sfx.miss();lives--;bad++;streak=0;hud();
  const g=$('grass');g.classList.add('flash');setTimeout(()=>g.classList.remove('flash'),180);
  if(lives<=0)end();
}

function frame(t){
  if(!running)return;
  requestAnimationFrame(frame);
  if(paused){last=t;return}
  const dt=Math.min((t-last)/1000,.05);last=t;
  elapsed+=dt;spawnT+=dt;
  if(S.gmode!=='classic'){timeLeft-=dt;if(timeLeft<=0){timeLeft=0;hud();end('Time Up!');return}}
  if(S.gmode==='code'){hud();return}
  if(spawnT>=interval()){spawnT=0;const n=1+Math.floor(Math.random()*D().b);for(let k=0;k<n;k++)spawn(k*70)}
  const H=field.clientHeight;
  for(const o of words.slice()){
    o.y+=o.v*dt;
    o.el.style.transform=`translate(${o.x}px,${o.y}px)`;
    if(o.y+o.el.offsetHeight>=H)miss(o);
  }
  $('time').textContent=timeTxt();
}

function showOv(t,p,canResume){
  $('ovT').textContent=t;$('ovP').textContent=p;
  $('resume').classList.toggle('hide',!canResume);syncPick();
  $('ov').classList.remove('hide');
}

function start(m){
  gMax=0;
  mode=m;S.difficulty=m;saveS();timeLeft=S.tlimit;$('timeLbl').textContent=S.gmode==='classic'?'Time':'Time Left';loadBest();$('mode').textContent=m[0].toUpperCase()+m.slice(1)+(S.gmode==='classic'?'':' · '+(S.gmode==='time'?'Time':'Code'));
  words.forEach(o=>o.el.remove());words=[];
  score=0;lives=3;elapsed=0;spawnT=1.2;hits=0;bad=0;streak=0;paused=false;running=true;
  setupCode();resetPauseUI();hud();$('ov').classList.add('hide');inp.value='';inp.focus();
  last=performance.now();ac();musicStart();requestAnimationFrame(frame);
}

function end(title){
  running=false;musicStop();sfx.over();
  if(score>best){best=score;$('best').textContent=best;try{localStorage.setItem(bestKey(),best)}catch(e){}}
  const news=recordGame();
  showOv(title||'Game Over','Score '+score+'  |  '+(S.gmode==='code'?'WPM '+$('wpm').textContent+'  |  Accuracy '+$('acc').textContent:'Time '+Math.floor(elapsed)+'s')+'  |  Best '+best+'. Pick a mode and difficulty to play again.',false);
  news.forEach((m,i)=>setTimeout(()=>toast(m),700+i*2100));
  if(activeDaily&&!P.daily.done[activeDaily.id])setTimeout(()=>toast('Challenge not completed yet. Try again!'),700);
}

function openSettings(){openModal()}
function resume(){closeModal(true)}

$('setBtn').onclick=openSettings;
$('resume').onclick=resume;
function resetPauseUI(){$('pz').classList.add('hide');$('pauseBtn').lastElementChild.textContent='Pause'}
function pauseGame(){
  if(!running||paused)return;
  paused=true;$('pz').classList.remove('hide');$('pauseBtn').lastElementChild.textContent='Resume';$('pzResume').focus();
}
function resumeGame(){
  if(!running||!paused)return;
  paused=false;resetPauseUI();inp.focus();
}
$('pauseBtn').onclick=()=>paused?resumeGame():pauseGame();
$('restartBtn').onclick=()=>start(mode);
$('pzResume').onclick=resumeGame;
$('pzRestart').onclick=()=>start(mode);
addEventListener('keydown',e=>{
  if(e.key!=='Escape'||e.defaultPrevented||!running||!$s.classList.contains('hide'))return;
  paused?resumeGame():pauseGame();
});
const DESC={
  words:'<b>Easy:</b> basic keywords. <b>Medium:</b> common libraries and OOP names. <b>Hard:</b> advanced concepts and dunder methods.',
  code:'<b>Easy:</b> short 3-5 line scripts. <b>Medium:</b> loops, functions and f-strings. <b>Hard:</b> classes, generators and decorators.'
};
function syncPick(){
  document.querySelectorAll('#gm button').forEach(b=>b.classList.toggle('sel',b.dataset.g===S.gmode));
  $('timeRow').classList.toggle('hide',S.gmode==='classic');
  $('fTime').value=String(S.tlimit);
  $('dDesc').innerHTML=S.gmode==='code'?DESC.code:DESC.words;
}
document.querySelectorAll('#gm button').forEach(b=>b.onclick=()=>{S.gmode=b.dataset.g;saveS();syncPick()});
$('fTime').onchange=e=>{S.tlimit=+e.target.value;saveS()};
document.querySelectorAll('#modes button').forEach(b=>b.onclick=()=>{forced=null;activeDaily=null;start(b.dataset.m)});


// ----- code mode: type directly over the code -----
let prog=[],li=0,prevLen=0,progs=0,lastProg=-1,setSize=1;
const edBody=$('edBody');
const esc=s=>s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
function loadProg(){
  if(forced){setSize=1;prog=forced.map(l=>{const t=l.trimStart();return{ind:l.length-t.length,t}});li=0;prevLen=0;inp.value='';renderEd();return}
  const L=PROGLIST[mode];
  const idx=L.map((_,i)=>i).sort(()=>Math.random()-.5).slice(0,Math.min(D().n,L.length));
  setSize=idx.length;
  prog=[];
  idx.forEach(k=>L[k].forEach(l=>{const t=l.trimStart();prog.push({ind:l.length-t.length,t})}));
  li=0;prevLen=0;inp.value='';renderEd();
}
function renderEd(){
  const typed=inp.value;let h='';
  prog.forEach((ln,i)=>{
    h+='<div class="cl'+(i===li?' cur':i<li?' done':'')+'"><span class="ln">'+(i+1)+'</span><span>'+' '.repeat(ln.ind)+'</span>';
    for(let c=0;c<ln.t.length;c++){
      let cls='p';
      if(i<li)cls='ok';
      else if(i===li&&c<typed.length)cls=typed[c]===ln.t[c]?'ok':'er';
      if(i===li&&c===typed.length)h+='<i class="caret"></i>';
      h+='<span class="'+cls+'">'+esc(ln.t[c])+'</span>';
    }
    if(i===li&&typed.length>=ln.t.length)h+='<i class="caret"></i>';
    h+='</div>';
  });
  edBody.innerHTML=h;
  const cur=edBody.querySelector('.cur');if(cur&&cur.scrollIntoView)cur.scrollIntoView({block:'nearest'});
}
function nextLine(){
  score+=20;sfx.hit();
  li++;while(li<prog.length&&!prog[li].t)li++;
  inp.value='';prevLen=0;
  if(li>=prog.length){score+=100*setSize;progs+=setSize;$('edCount').textContent=progs;loadProg()}
  else renderEd();
  hud();
}
function codeInput(){
  const t=prog[li].t;let v=inp.value;
  if(v.length>t.length){v=v.slice(0,t.length);inp.value=v}
  for(let i=prevLen;i<v.length;i++){
    if(v[i]===t[i]){hits++;streak++;score+=10}
    else{bad++;streak=0;sfx.bad()}
  }
  prevLen=v.length;
  if(v===t)nextLine();else{renderEd();hud()}
}
function codeKey(e){
  if(e.key==='Tab')e.preventDefault();
  if(e.key!=='Enter')return;
  e.preventDefault();
  if(!running||paused)return;
  if(inp.value.length>=prog[li].t.length)nextLine();
}
inp.addEventListener('paste',e=>{if(S.gmode==='code')e.preventDefault()});
function setupCode(){
  const c=S.gmode==='code';
  document.body.classList.toggle('codemode',c);
  $('editor').classList.toggle('hide',!c);$('codeHint').classList.toggle('hide',!c);
  $('livesRow').classList.toggle('hide',c);$('wpmRow').classList.toggle('hide',!c);
  if(c){progs=0;lastProg=-1;$('edCount').textContent=0;loadProg()}
}

// ----- title screen -----
const intro=$('intro');
function showIntro(){
  running=false;paused=false;musicStop();resetPauseUI();
  words.forEach(o=>o.el.remove());words=[];inp.value='';
  $('ov').classList.add('hide');
  intro.classList.remove('go','out');void intro.offsetWidth;intro.classList.add('go');
}
function startFromIntro(){
  if(intro.classList.contains('out'))return;
  showNav();
}
$('iStart').onclick=startFromIntro;
$('iSet').onclick=openModal;
$('menu').onclick=showNav;$('menuBtn').onclick=showNav;$('pzMenu').onclick=showNav;
addEventListener('keydown',e=>{if(e.key==='Enter'&&!intro.classList.contains('out')&&$s.classList.contains('hide'))startFromIntro()});


// ===== profile: stats, leaderboard, achievements, daily challenges =====
let gMax=0,activeDaily=null,forced=null;
const PK='pyTyperProfile';
const P0=()=>({games:0,hits:0,bad:0,secs:0,best:0,bestWpm:0,maxStreak:0,recent:[],board:[],gm:{classic:0,time:0,code:0},ach:{},daily:{streak:0,last:'',done:{},total:0},name:'Player'});
let P=P0();
try{Object.assign(P,JSON.parse(localStorage.getItem(PK)||'{}'))}catch(e){}
['gm','daily'].forEach(k=>{P[k]=Object.assign(P0()[k],P[k])});
const saveP=()=>{try{localStorage.setItem(PK,JSON.stringify(P))}catch(e){}};
const escH=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const GM2={classic:'Classic',time:'Time Attack',code:'Code Mode'};
const fmtT=s=>s>=60?s/60+' min':s+' sec';
const dateKey=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');

const ACH=[
  {id:'first',i:'🎮',n:'First Steps',d:'Finish your first game',t:c=>P.games>=1},
  {id:'g10',i:'🔟',n:'Regular',d:'Play 10 games',t:c=>P.games>=10},
  {id:'s500',i:'⭐',n:'Rising Star',d:'Score 500 in one game',t:c=>c.score>=500},
  {id:'s1500',i:'🌟',n:'Superstar',d:'Score 1,500 in one game',t:c=>c.score>=1500},
  {id:'s4000',i:'👑',n:'Typing King',d:'Score 4,000 in one game',t:c=>c.score>=4000},
  {id:'st10',i:'🔥',n:'On Fire',d:'Reach a streak of 10',t:c=>c.streak>=10},
  {id:'st30',i:'⚡',n:'Unstoppable',d:'Reach a streak of 30',t:c=>c.streak>=30},
  {id:'w30',i:'⌨️',n:'Quick Fingers',d:'Reach 30 WPM',t:c=>c.wpm>=30},
  {id:'w60',i:'🚀',n:'Speed Demon',d:'Reach 60 WPM',t:c=>c.wpm>=60},
  {id:'perf',i:'🎯',n:'Perfectionist',d:'100% accuracy with 20+ hits',t:c=>c.acc===100&&c.hits>=20},
  {id:'modes',i:'🧭',n:'Explorer',d:'Play Classic, Time Attack and Code Mode',t:c=>P.gm.classic>0&&P.gm.time>0&&P.gm.code>0},
  {id:'hard',i:'💪',n:'Hardcore',d:'Score 300+ on Hard',t:c=>c.diff==='hard'&&c.score>=300},
  {id:'code3',i:'🧑‍💻',n:'Code Master',d:'Finish 3 programs in one Code Mode game',t:c=>c.progs>=3},
  {id:'daily',i:'📅',n:'Daily Doer',d:'Complete a daily challenge',t:c=>P.daily.total>=1},
  {id:'hits500',i:'🏅',n:'Marathon',d:'Type 500 correct words or characters in total',t:c=>P.hits>=500}
];
const metricVal=(m,c)=>m==='score'?c.score:m==='streak'?c.streak:c.progs;

function rng(seed){let s=seed>>>0;return()=>{s=(s+0x6D2B79F5)>>>0;let t=s;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
function dailyList(){
  const key=dateKey();let seed=0;for(const ch of key)seed=(seed*31+ch.charCodeAt(0))>>>0;
  const r=rng(seed),pick=a=>a[Math.floor(r()*a.length)];
  const d1=pick(['easy','medium','hard']),d2=pick(['easy','medium']),d3=pick(['easy','medium','hard']);
  const t1=pick({easy:[300,400,500],medium:[400,600,800],hard:[500,700,900]}[d1]),t2=pick([10,15,20]),t3=pick([1,2]);
  return [
    {id:key+'-a',gm:'classic',diff:d1,tl:60,metric:'score',target:t1,text:'Score '+t1+'+ points in Classic'},
    {id:key+'-b',gm:'time',diff:d2,tl:60,metric:'streak',target:t2,text:'Reach a streak of '+t2+' in Time Attack'},
    {id:key+'-c',gm:'code',diff:d3,tl:90,metric:'progs',target:t3,text:'Finish '+t3+' program'+(t3>1?'s':'')+' in Code Mode'}
  ];
}
function recordGame(){
  const tot=hits+bad,acc=tot?Math.round(hits/tot*100):100,wpm=Math.round(hits/5/Math.max(elapsed,5)*60);
  const c={score,streak:gMax,wpm,acc,hits,progs:S.gmode==='code'?progs:0,diff:mode,gm:S.gmode};
  P.games++;P.hits+=hits;P.bad+=bad;P.secs+=Math.round(elapsed);
  P.best=Math.max(P.best,score);P.bestWpm=Math.max(P.bestWpm,wpm);P.maxStreak=Math.max(P.maxStreak,gMax);
  P.gm[S.gmode]=(P.gm[S.gmode]||0)+1;
  P.recent.push(score);P.recent=P.recent.slice(-12);
  if(score>0){P.board.push({n:P.name,s:score,gm:S.gmode,d:mode,w:wpm,a:acc,t:Date.now()});P.board.sort((a,b)=>b.s-a.s);P.board=P.board.slice(0,50)}
  const news=[];
  if(activeDaily&&!P.daily.done[activeDaily.id]&&metricVal(activeDaily.metric,c)>=activeDaily.target){
    P.daily.done[activeDaily.id]=true;P.daily.total++;
    const k=dateKey();
    if(P.daily.last!==k){P.daily.streak=P.daily.last===dateKey(new Date(Date.now()-864e5))?P.daily.streak+1:1;P.daily.last=k}
    news.push('✅ Daily challenge complete!');
  }
  ACH.forEach(a=>{if(!P.ach[a.id]&&a.t(c)){P.ach[a.id]=Date.now();news.push('Achievement: '+a.i+' '+a.n)}});
  saveP();return news;
}
function toast(m){
  const t=$('toast');t.textContent=m;t.classList.remove('hide','in');void t.offsetWidth;t.classList.add('in');
  clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.add('hide'),2400);
}

// ===== navigation hub =====
const LESSONS=[{"t": "Variables", "x": "A variable stores a value. Python works out the type for you.", "c": ["name = \"Sam\"", "age = 20", "print(name, age)"]}, {"t": "Strings", "x": "Strings are text. They come with handy methods like upper() and len().", "c": ["word = \"python\"", "print(word.upper())", "print(word[0])", "print(len(word))"]}, {"t": "Lists", "x": "A list holds many items in order. Use append to add and an index to read.", "c": ["fruits = [\"apple\", \"mango\"]", "fruits.append(\"kiwi\")", "print(fruits[0])", "print(len(fruits))"]}, {"t": "Dictionaries", "x": "A dictionary maps keys to values.", "c": ["user = {\"name\": \"Ali\", \"age\": 21}", "user[\"city\"] = \"Karachi\"", "for key, value in user.items():", "    print(key, value)"]}, {"t": "If / else", "x": "Make decisions with if, elif and else. Indentation matters!", "c": ["score = 72", "if score >= 90:", "    print(\"A\")", "elif score >= 70:", "    print(\"B\")", "else:", "    print(\"Try again\")"]}, {"t": "Loops", "x": "for loops repeat over a sequence. while loops repeat until a condition fails.", "c": ["for i in range(3):", "    print(i)", "count = 0", "while count < 3:", "    count += 1"]}, {"t": "Functions", "x": "Functions group code you can reuse. return sends a value back.", "c": ["def add(a, b):", "    return a + b", "print(add(2, 3))"]}, {"t": "Classes", "x": "A class is a blueprint for objects with data and behaviour.", "c": ["class Dog:", "    def __init__(self, name):", "        self.name = name", "    def bark(self):", "        return f\"{self.name} says woof\"", "print(Dog(\"Rex\").bark())"]}, {"t": "Errors", "x": "try and except let your program handle problems without crashing.", "c": ["try:", "    num = int(\"abc\")", "except ValueError:", "    print(\"Not a number\")", "finally:", "    print(\"Done\")"]}, {"t": "Comprehensions", "x": "Build lists in one short line.", "c": ["squares = [n * n for n in range(5)]", "evens = [n for n in squares if n % 2 == 0]", "print(squares, evens)"]}];
const nav=$('nav'),sub=$('sub');
(function(){
  let k='<g transform="rotate(-9 110 62)"><rect x="6" y="14" width="208" height="86" rx="12" fill="#0f3a8a" stroke="#2f7bff" stroke-width="3"/>';
  for(let r=0;r<4;r++)for(let c=0;c<12;c++){if(r===3&&c>2&&c<9)continue;k+='<rect x="'+(16+c*16)+'" y="'+(22+r*17)+'" width="13" height="13" rx="3" fill="#0b1b4d" stroke="#3a86ff" stroke-width="1.2"/>'}
  k+='<rect x="64" y="73" width="86" height="13" rx="3" fill="#0b1b4d" stroke="#3a86ff" stroke-width="1.2"/></g><path d="M214 30h24M218 44h28M212 58h22" stroke="#ffc83d" stroke-width="4" stroke-linecap="round"/>';
  $('nkb').innerHTML=k;
})();
function showNav(){
  running=false;paused=false;musicStop();resetPauseUI();
  words.forEach(o=>o.el.remove());words=[];inp.value='';
  forced=null;activeDaily=null;
  $('ov').classList.add('hide');sub.classList.add('hide');intro.classList.add('out');
  nav.classList.remove('hide','go');void nav.offsetWidth;nav.classList.add('go');
}
const hideSub=()=>sub.classList.add('hide');
const SUBT={lb:'🏆 Leaderboard',learn:'🎓 Learn Python',daily:'🎯 Daily Challenges',ach:'🏅 Achievements',stats:'📊 Statistics',skins:'🎨 Themes & Skins'};
function openSub(n){
  $('subT').textContent=SUBT[n];
  ({lb:renderLB,learn:renderLearn,daily:renderDaily,ach:renderAch,stats:renderStats,skins:renderSkins})[n]();
  sub.classList.remove('hide');$('subB').scrollTop=0;
}
document.querySelectorAll('.nitem').forEach(b=>b.onclick=()=>{
  const n=b.dataset.n;
  if(n==='play'){nav.classList.add('hide');showOv('Choose Mode & Difficulty','Pick a mode, then a difficulty to start. Classic and Time Attack give you 3 lives.',false)}
  else if(n==='settings')openModal();
  else openSub(n);
});
$('subBack').onclick=hideSub;
addEventListener('keydown',e=>{if(e.key==='Escape'&&!e.defaultPrevented&&!sub.classList.contains('hide'))hideSub()});

let lbF='all';
function renderLB(){
  const rows=P.board.filter(e=>lbF==='all'||e.gm===lbF).slice(0,10);
  $('subB').innerHTML='<div class="row2"><label>Your name <input id="pname" maxlength="14" value="'+escH(P.name)+'"></label><div class="tabs">'
    +['all','classic','time','code'].map(f=>'<button class="tab'+(lbF===f?' on':'')+'" data-f="'+f+'">'+({all:'All'}[f]||GM2[f])+'</button>').join('')+'</div></div>'
    +(rows.length?'<table class="tbl"><tr><th>#</th><th>Player</th><th>Score</th><th>Mode</th><th>WPM</th><th>Acc</th></tr>'
      +rows.map((e,i)=>'<tr><td>'+(i<3?['🥇','🥈','🥉'][i]:i+1)+'</td><td>'+escH(e.n)+'</td><td><b>'+e.s+'</b></td><td>'+GM2[e.gm]+' · '+e.d+'</td><td>'+e.w+'</td><td>'+e.a+'%</td></tr>').join('')+'</table>'
      :'<p class="mute">No scores yet. Play a game to get on the board!</p>')
    +'<p class="mute">Scores are saved on this device only.</p>';
  $('pname').onchange=e=>{P.name=(e.target.value.trim()||'Player').slice(0,14);saveP()};
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{lbF=b.dataset.f;renderLB()});
}
const CI_URL='https://codeinverse-kappa.vercel.app/';
const CI_ICON='data:image/png;base64,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';
const ciCard=()=>'<a class="cinv" href="'+CI_URL+'" target="_blank" rel="noopener noreferrer" aria-label="Open CodeInverse in a new tab"><img src="'+CI_ICON+'" alt="" width="56" height="56"><span class="ct"><b>CodeInverse</b><small>Want to learn even more? Keep going on CodeInverse.</small></span><span class="cgo">Visit &#8599;</span></a>';

function renderLearn(){
  $('subB').innerHTML=ciCard()+'<p class="lead">Read a short lesson, then type the code yourself. Practice runs in Code Mode for 2 minutes.</p><div class="cards wide">'
    +LESSONS.map((l,i)=>'<div class="cd"><h3>'+(i+1)+'. '+escH(l.t)+'</h3><p class="mute">'+escH(l.x)+'</p><pre class="mono codebox">'+escH(l.c.join('\n'))+'</pre><button class="pb" data-i="'+i+'">Type it ▶</button></div>').join('')+'</div>';
  document.querySelectorAll('#subB .pb').forEach(b=>b.onclick=()=>{
    S.gmode='code';S.tlimit=120;forced=LESSONS[+b.dataset.i].c;activeDaily=null;
    hideSub();nav.classList.add('hide');start(S.difficulty);
  });
}
function renderDaily(){
  const list=dailyList(),yk=dateKey(new Date(Date.now()-864e5));
  const streak=(P.daily.last===dateKey()||P.daily.last===yk)?P.daily.streak:0;
  $('subB').innerHTML='<p class="lead">New challenges every day. Complete them to build your streak.</p><div class="cards"><div class="cd stat"><small>Daily streak</small><b>🔥 '+streak+'</b></div><div class="cd stat"><small>Done today</small><b>'+list.filter(c=>P.daily.done[c.id]).length+' / 3</b></div></div><div class="list">'
    +list.map((c,i)=>'<div class="cd ch'+(P.daily.done[c.id]?' done':'')+'"><div><b>'+escH(c.text)+'</b><small>'+GM2[c.gm]+(c.gm==='classic'?'':' · '+fmtT(c.tl))+' · '+c.diff+'</small></div>'
      +(P.daily.done[c.id]?'<span class="okk">✔ Done</span>':'<button class="pb" data-i="'+i+'">Play ▶</button>')+'</div>').join('')+'</div>';
  document.querySelectorAll('#subB .pb').forEach(b=>b.onclick=()=>{
    const c=dailyList()[+b.dataset.i];
    S.gmode=c.gm;S.tlimit=c.tl;forced=null;activeDaily=c;hideSub();nav.classList.add('hide');start(c.diff);
  });
}
function renderAch(){
  const n=ACH.filter(a=>P.ach[a.id]).length;
  $('subB').innerHTML='<p class="lead">'+n+' / '+ACH.length+' unlocked</p><div class="cards">'
    +ACH.map(a=>'<div class="cd badge'+(P.ach[a.id]?'':' lock')+'"><span class="bi">'+a.i+'</span><b>'+a.n+'</b><small>'+a.d+'</small>'+(P.ach[a.id]?'<span class="okk">Unlocked</span>':'<span class="mute">Locked</span>')+'</div>').join('')+'</div>';
}
function renderStats(){
  const tot=P.hits+P.bad,acc=tot?Math.round(P.hits/tot*100):100,mx=Math.max(1,...P.recent),mm=Math.max(1,...Object.values(P.gm));
  const cards=[['Games played',P.games],['Best score',P.best],['Best WPM',P.bestWpm],['Accuracy',acc+'%'],['Longest streak',P.maxStreak],['Time played',Math.floor(P.secs/60)+'m '+P.secs%60+'s'],['Achievements',ACH.filter(a=>P.ach[a.id]).length+' / '+ACH.length]];
  $('subB').innerHTML='<div class="cards">'+cards.map(x=>'<div class="cd stat"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div>'
    +'<h3 class="h3">Games by mode</h3><div class="hb2">'+Object.keys(GM2).map(k=>'<div class="hrow"><span>'+GM2[k]+'</span><i style="width:'+(P.gm[k]/mm*100)+'%"></i><em>'+P.gm[k]+'</em></div>').join('')+'</div>'
    +'<h3 class="h3">Last scores</h3>'+(P.recent.length?'<div class="bars">'+P.recent.map(s=>'<div class="bar" style="height:'+Math.max(6,s/mx*100)+'%"><span>'+s+'</span></div>').join('')+'</div>':'<p class="mute">Play a game to see your progress here.</p>')
    +'<button id="rst" class="sb">Reset all progress</button>';
  const r=$('rst');let armed=false;
  r.onclick=()=>{if(!armed){armed=true;r.textContent='Click again to confirm';return}const nm=P.name;P=P0();P.name=nm;saveP();renderStats()};
}
function renderSkins(){
  $('subB').innerHTML='<h3 class="h3">Themes</h3><div class="cards">'
    +SKINS.map(k=>'<button class="cd pick'+(S.skin===k.id?' on':'')+'" data-k="'+k.id+'"><span class="pv pv-'+k.id+'"></span><b>'+k.n+'</b><small>'+k.d+'</small></button>').join('')+'</div>'
    +'<h3 class="h3">Snake skins</h3><div class="cards">'
    +SNAKES.map(k=>'<button class="cd pick'+(S.snake===k.id?' on':'')+'" data-s="'+k.id+'"><span class="pvs">'+SNAKE(k,82)+'</span><b>'+k.n+'</b></button>').join('')+'</div>';
  document.querySelectorAll('#subB [data-k]').forEach(b=>b.onclick=()=>{
    const k=SKINS.find(x=>x.id===b.dataset.k);
    S.skin=k.id;S.theme=k.id==='day'?'light':'dark';S.accent=k.a;saveS();applyLook(S);renderSkins();
  });
  document.querySelectorAll('#subB [data-s]').forEach(b=>b.onclick=()=>{S.snake=b.dataset.s;saveS();applyLook(S);renderSkins()});
}
loadBest();hud();