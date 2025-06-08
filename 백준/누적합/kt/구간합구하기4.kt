package 백준.누적합.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val sumList = mutableListOf<Int>()
    sumList.add(0)
    // n 수의 개수, m 합을 구해야 되는 횟수
    val (n, m) = br.readLine().split(" ").map { it.toInt() }
    val result = mutableListOf<Int>()
    // 누적합
    // sumlist[j] - sumlist[i - 1]
    br.readLine().split(" ").map {
        val num = it.toInt()
        sumList.add(sumList.last() + num)
    }

    repeat(m) {
        val (i, j) = br.readLine().split(" ").map { it.toInt() }

        result.add(sumList[j] - sumList[i - 1])
    }

    result.forEach { println(it) }
}
