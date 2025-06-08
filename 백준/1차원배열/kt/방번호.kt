package 백준.`1차원배열`.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    // 6 9는 두 개 쓸 수 있음
    val br = BufferedReader(InputStreamReader(System.`in`))
    val card = br.readLine().map { it.digitToInt() }

    val cards: MutableMap<Int, Int> =
        mutableMapOf(
            0 to 0,
            1 to 0,
            2 to 0,
            3 to 0,
            4 to 0,
            5 to 0,
            6 to 0,
            7 to 0,
            8 to 0,
            9 to 0,
        )

    card.forEach { cards[it]?.let { count -> cards[it] = count + 1 } }

    val sixNineCount = cards[6]!! + cards[9]!!
    val setCount = (sixNineCount + 1) / 2
    cards[6] = setCount
    cards[9] = setCount

    println(cards.values.maxOrNull() ?: 0)
}
