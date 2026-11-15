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
const DEF={difficulty:'easy',speed:'normal',gmode:'classic',tlimit:60,density:'normal',ver:3,theme:'dark',accent:'#3b8eea',bg:true,music:70,sfx:80};
const SPEEDS={slow:.7,normal:1,fast:1.35,insane:1.7};
const DENS={normal:{i:1,b:1,cap:10,s:1,n:1},high:{i:.6,b:2,cap:16,s:.9,n:2},extreme:{i:.33,b:3,cap:30,s:.8,n:4}};
const D=()=>DENS[S.density]||DENS.normal;
let S={...DEF},W={...DEF},timeLeft=60,wasRunning=false;
let saved={};try{saved=JSON.parse(localStorage.getItem('pyTypeSettings')||'{}')}catch(e){}
Object.assign(S,saved);
if(saved.ver!==3){S.density='normal';S.ver=3}
if(!CFG[S.difficulty])S.difficulty='easy';
if(!DENS[S.density])S.density='normal';
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
const MEL=[440,0,523,0,659,523,440,0,392,0,494,0,587,494,392,0,349,0,440,0,523,440,349,0,392,0,494,587,659,0,587,0];
let mi=0,mt=null;
function musicStop(){clearInterval(mt);mt=null}
function musicStart(){
  musicStop();
  mt=setInterval(()=>{if(paused||!running)return;const f=MEL[mi++%MEL.length];if(f&&S.music>0)tone(f,.22,'triangle',.09*S.music/100)},230);
}
const $s=$('set');
function sync(){
  $('fDiff').value=W.difficulty;$('fSpeed').value=W.speed;$('fDens').value=W.density;$('fTheme').value=W.theme;
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
[['fDiff','difficulty'],['fSpeed','speed'],['fDens','density'],['fTheme','theme']].forEach(([id,k])=>$(id).onchange=e=>{W[k]=e.target.value;applyLook(W)});
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
  mode=m;S.difficulty=m;saveS();timeLeft=S.tlimit;$('timeLbl').textContent=S.gmode==='classic'?'Time':'Time Left';loadBest();$('mode').textContent=m[0].toUpperCase()+m.slice(1)+(S.gmode==='classic'?'':' · '+(S.gmode==='time'?'Time':'Code'));
  words.forEach(o=>o.el.remove());words=[];
  score=0;lives=3;elapsed=0;spawnT=1.2;hits=0;bad=0;streak=0;paused=false;running=true;
  setupCode();resetPauseUI();hud();$('ov').classList.add('hide');inp.value='';inp.focus();
  last=performance.now();ac();musicStart();requestAnimationFrame(frame);
}

function end(title){
  running=false;musicStop();sfx.over();
  if(score>best){best=score;$('best').textContent=best;try{localStorage.setItem(bestKey(),best)}catch(e){}}
  showOv(title||'Game Over','Score '+score+'  |  '+(S.gmode==='code'?'WPM '+$('wpm').textContent+'  |  Accuracy '+$('acc').textContent:'Time '+Math.floor(elapsed)+'s')+'  |  Best '+best+'. Pick a mode and difficulty to play again.',false);
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
document.querySelectorAll('#modes button').forEach(b=>b.onclick=()=>start(b.dataset.m));


// ----- code mode: type directly over the code -----
let prog=[],li=0,prevLen=0,progs=0,lastProg=-1,setSize=1;
const edBody=$('edBody');
const esc=s=>s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
function loadProg(){
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
    if(v[i]===t[i]){hits++;streak++;score+=10;sfx.tick()}
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
  intro.classList.add('out');
  showOv('Choose Mode & Difficulty','Pick a mode, then a difficulty to start. Classic and Time Attack give you 3 lives.',false);
}
$('iStart').onclick=startFromIntro;
$('iSet').onclick=openModal;
$('menu').onclick=showIntro;$('menuBtn').onclick=showIntro;$('pzMenu').onclick=showIntro;
addEventListener('keydown',e=>{if(e.key==='Enter'&&!intro.classList.contains('out')&&$s.classList.contains('hide'))startFromIntro()});
loadBest();hud();