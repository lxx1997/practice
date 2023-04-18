德州扑克模式识别

1、题目介绍
l	按照集合内元素的某几种属性，对集合进行识别和排序是一个计算机领域的常见问题。
l	有4种花色的扑克牌，每种花色共有13张牌。则总共有52张牌。
l	每张牌有一个编号，编号从1~13。每个编号使用一个字符表示。1~9使用”1”~”9”表示。10~13分别使用大写字母”A”~”D”表示。
l	每种花色使用一个大写字母表示。如下表：
 
字母 花色  
 
H Heart 红桃  
 
S Spade 黑桃  
 
C Club  梅花  
 
D Diamond  方块  

l	这样，每张牌可以使用“编号+花色”的字符串表示。比如，字符串“7H”表示红桃7，字符串“AS”表示黑桃10，字符创“CC”表示梅花12，字符串“DD”表示方块13
l	从上述扑克牌中随机选取5张牌，判断这5张牌所属的模式：

 
优先级 模式 举例 备注  
 
1优先级最高 LargestFlush 9H AH BH CH DH StraightFlush的特例。牌的编号是最大的连续数列。  
 
2 StraightFlush 3D 4D 5D 6D 7D 牌的编号连续，并且有相同的花色。  
 
3 FourofaKind 8H 5H 5D 5S 5C 有四张牌的编号相同。如例子中是有四张牌的编号为5。  
 
4 FullHouse 3H 1C 3D 3S 1H 有三张牌的编号相同，并且另外两张牌的编号也相同。  
 
5 Flush 2D 7D 3D AD DD 所有五张牌的花色相同。  
 
6 Straight 7D 9H AS 8C BH 所有五张牌编号连续。例子中，7 8 9 A B连续。  
 
7 ThreeofAKind 6H 5H DS 5S 5D 有三张牌的编号相同。例子中，有3个编号为5。  
 
8 TwoPairs AH CD CS AS 3H 两张牌的编号相同，出现两次。例子中，有两个编号A，两个编号C。  
 
9 OnePair 2H 8S 4D 8D BC 两张牌的编号相同，出现1次。例子中，有两个编号8。  
 
10 优先级最低 Highest 2H 7D 4S 5C BH 不符合上面任何一种牌型的牌型，由单牌且不连续不同花的组成  
2、编程实现
1、在前面表格10种模式中，需至少实现5种或以上模式判断。
2、实现如下的函数。输入是一个字符串，表示一组牌。输出是模式的名称（名称见前面的表格）。如，ThreeofAKind模式，则输出“ThreeofAKind”。注意，如果无法判断模式，则输出"Unknown"。
string findPattern(string cardGroup)
{
}
3、函数参数描述：
p	cardGroup：一个字符串，表示一组牌。如，“DH 3C 4S 5D BC”表示一组5张牌。
p	每张牌之间以一个或者多个空格分隔。可能存在前导空格和结束空格。
p	字母区分大小写。
4、返回值要求：
p	前述表格定义的模式名称。
p	如果所给的字符串无法解析为有效的包含5张牌，则返回“Unknown ”。例如，字符串为空，存在无法解析的字符、不是5张牌、未实现的模式等情况。


用例编号 测试用例 输入 输出  
 
1 皇家同花顺 9D AD BD CD DD LargestFlush  
 
2 同花顺 7D 8D 9D AD BD  StraightFlush  
 
3 4条 9H 8H 8D 8S 8C FourofaKind  
 
4 葫芦 3H 1C 3D 3S 1H FullHouse  
 
5 同花 2D 7D 3D AD DD Flush  
 
6 顺子 7D 9H AS 8C BH Straight  
 
7 3条 6H 5H DS 5S 5D ThreeofAKind  
 
8 两对 AH CD CS AS 3H TwoPairs  
 
9 一对 2H AS 4D AD BC OnePair  
 
10 高牌 2H 7D 4S 5C BH Highest  
 
11 输入为空  Unknown  
 
12 无法解析字符 3H 4K 4S 5C BH Unknown  
 
13 不是5张牌 3H 4H 4S 5C BH DC Unknown 