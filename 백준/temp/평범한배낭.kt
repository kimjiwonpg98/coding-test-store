import java.io.BufferedReader
import java.io.InputStreamReader

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val (count, weight) = br.readLine().split(" ").map { it.toInt() }
    val items = mutableMapOf<Int, Int>() // Pair<weight, value>

    repeat(count) {
        val (itemWeight, itemValue) = br.readLine().split(" ").map { it.toInt() }

        if (itemWeight > weight) return@repeat

        items[itemWeight] = itemValue
    }

    val valueList = emptyList<Int>() // value를 담을 리스트

    // value가 높은거부터 가져가면서 무게를 채워나간다.

    var totalValue = 0

    val sortedItems = items.entries.sortedByDescending { it.value }
}
