package 백준.누적합.kt

import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))

    val (n, k) = br.readLine().split(" ").map { it.toInt() }
    val numbers = br.readLine().split(" ").map { it.toInt() }

    /**
     * for문으로 풀게 되면 메모리 이슈
     **/
    var windowSum = 0

    // 초기합을 구한다
    for (i in 0 until k) {
        windowSum += numbers[i]
    }
    var maxSum = windowSum

    // 초기합에서 앞 숫자를 빼고 뒷 숫자를 더한다.
    for (i in k until n) {
        windowSum += numbers[i] - numbers[i - k]
        if (windowSum > maxSum) maxSum = windowSum
    }

    println(maxSum)
}
