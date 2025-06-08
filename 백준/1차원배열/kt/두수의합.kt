package 백준.`1차원배열`.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt()
    val numbers = br.readLine().split(" ").map { it.toInt() }
    val x = br.readLine().toInt()

    // x보다 큰 수는 없앤다
    val allowed = numbers.filter { it < x }.sorted()

    var start = 0
    var end = allowed.size - 1
    var count = 0

    // 시작과 끝부터 더하면서 중간까지 간다.
    // 둘이 더한게 x보다 크면 끝에서 앞으로 한 칸
    // 둘이 더한게 x보다 작으면 앞에서 뒤로 한 칸
    while (start < end) {
        if (allowed[start] + allowed[end] == x) count++
        if (allowed[start] + allowed[end] <= x) {
            start++
        } else {
            end--
        }
    }

    println(count)
}
