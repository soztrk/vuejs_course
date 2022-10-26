const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            battleLog:[]
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++
            const value = randomValue(8)
            this.monsterHealth -= value
            this.addLogMessage("player","attack",value)
            // AI
            this.attackPlayer()
        },
        attackPlayer(){
            const value = randomValue(15)
            this.playerHealth -= value
            this.addLogMessage("monster","attack",value)
        },
        specialAttack(){
            this.currentRound++
            const value = randomValue(20)
            this.monsterHealth -= value
            this.addLogMessage("player","attack",value)
            //AI
            this.attackPlayer()
        },
        healPlayer(){
            this.currentRound++
            const value = randomValue(25)
            if(this.playerHealth + value > 100) this.playerHealth = 100
            else this.playerHealth += value
            this.addLogMessage("player","heal",value)
            //AI
            this.attackPlayer()
        },
        surrender(){
            this.winner = "monster"
        },
        newGame(){
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.battleLog = []
        },
        addLogMessage(who,what,value){
            this.battleLog.push({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        },
        actionByText(actionBy){
            return actionBy === 'player' ? 'Sen' : 'Canavar'
        },
        actionByClass(actionBy){
            return {'log--player' : actionBy === 'player','log--monster' : actionBy === 'monster'}
        }
    },
    computed:{
        monsterHealthBar(){
            return {width: this.monsterHealth > 0 ? this.monsterHealth+"%" : "0%"}
        },
        playerHealthBar(){
            return {width: this.playerHealth > 0 ? this.playerHealth+"%" : "0%"}
        },
        canSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0 ){
                this.winner = "draw"
            }
            else if(value <= 0){
                this.winner = "monster"
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0 ){
                this.winner = "draw"
            }
            else if(value <= 0){
                this.winner = "player"
            }
        }
    }
})
app.mount("#game")

// Utility Function
function randomValue(value){
    var min = value+(value/2)
    var max = value-(value/2) 
    return Math.floor(Math.random() * (max-min)+min)
}