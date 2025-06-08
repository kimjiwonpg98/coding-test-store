package 백준.`1차원배열`.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))

    val word = br.readLine().split("")

    val alphabet: MutableMap<String, Int> = mutableMapOf()

    alphabet.put("a", 0)
    alphabet.put("b", 0)
    alphabet.put("c", 0)
    alphabet.put("d", 0)
    alphabet.put("e", 0)
    alphabet.put("f", 0)
    alphabet.put("g", 0)
    alphabet.put("h", 0)
    alphabet.put("i", 0)
    alphabet.put("j", 0)
    alphabet.put("k", 0)
    alphabet.put("l", 0)
    alphabet.put("m", 0)
    alphabet.put("n", 0)
    alphabet.put("o", 0)
    alphabet.put("p", 0)
    alphabet.put("q", 0)
    alphabet.put("r", 0)
    alphabet.put("s", 0)
    alphabet.put("t", 0)
    alphabet.put("u", 0)
    alphabet.put("v", 0)
    alphabet.put("w", 0)
    alphabet.put("x", 0)
    alphabet.put("y", 0)
    alphabet.put("z", 0)

    word.map {
        alphabet[it]?.let { it1 -> alphabet[it] = it1 + 1 }
    }

    println(alphabet.values.joinToString(" "))
}
