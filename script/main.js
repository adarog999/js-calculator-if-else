const unit1 = document.getElementById("m_unit_1")
const unit2 = document.getElementById("m_unit_2")
const inp1 = document.getElementById("m_value1")
const inp2 = document.getElementById("m_value2")
const message = document.getElementById("message")

function input1() {
    if (unit1.value !== unit2.value) {
        message.innerHTML = ""
    }
    if(inp1.value === '') {
        inp2.value = ''
        return;
    }
    if (unit1.value === unit2.value) {
        message.innerHTML = "Please select different messurement unit"
        inp2.value = ''
        inp1.value = ''
    }else if(unit1.value === "Meter") {
        if(unit2.value === "Meter") {
        message.innerHTML = "Please select different messurement unit"
        } else if (unit2.value === "Kilometre") {
            inp2.value = parseFloat(inp1.value) / 1000
        }else if (unit2.value === "Yard") {
            inp2.value = parseFloat(inp1.value) *1.094
        } else  {
            inp2.value = parseFloat(inp1.value) * 3.281
        }
    } else if (unit1.value === "Kilometre") {
        if(unit2.value === "Meter") {
            inp2.value = parseFloat(inp1.value) * 1000
        } else if (unit2.value === "Kilometre") {
            message.innerHTML = "Please select different messurement unit"
        } else if (unit2.value === "Yard") {
            inp2.value = parseFloat(inp1.value) * 1094
        } else {
            inp2.value = parseFloat(inp1.value) * 3281
        }
    } else if (unit1.value === "Yard") {
        if (unit2.value === "Meter") {
            inp2.value = parseFloat(inp1.value) / 1.094
        } else if (unit2.value === "Kilometre") {
            inp2.value = parseFloat(inp1.value) / 1094
        } else if (unit2.value === "Yard") {
            return;
        } else {
            inp2.value = parseFloat(inp1.value) * 3
        }
    } else {
        if (unit2.value === "Meter") {
            inp2.value = parseFloat(inp1.value) / 3.281
        } else if (unit2.value === "Kilometre") {
            inp2.value = parseFloat(inp1.value) / 3281
        } else if (unit2.value === "Yard") {
            inp2.value = parseFloat(inp1.value) / 3
        } else {
            return
        }
    }
}

function input2() {
    if(inp2.value === '') {
        inp1.value = ''
        return;
    }
    if (unit1.value === unit2.value) {
        message.innerHTML = "Please select different messurement unit"
        inp2.value = ''
        inp1.value = ''
    }else if(unit2.value === "Meter") {
        if(unit1.value === "Meter") {
        message.innerHTML = "Please select different messurement unit"
        } else if (unit1.value === "Kilometre") {
            inp1.value = parseFloat(inp2.value) / 1000
        }else if (unit1.value === "Yard") {
            inp1.value = parseFloat(inp2.value) *1.094
        } else  {
            inp1.value = parseFloat(inp2.value) * 3.281
        }
    } else if (unit2.value === "Kilometre") {
        if(unit1.value === "Meter") {
            inp1.value = parseFloat(inp2.value) * 1000
        } else if (unit1.value === "Kilometre") {
            message.innerHTML = "Please select different messurement unit"
        } else if (unit1.value === "Yard") {
            inp1.value = parseFloat(inp2.value) * 1094
        } else {
            inp1.value = parseFloat(inp2.value) * 3281
        }
    } else if (unit2.value === "Yard") {
        if (unit1.value === "Meter") {
            inp1.value = parseFloat(inp2.value) / 1.094
        } else if (unit1.value === "Kilometre") {
            inp1.value = parseFloat(inp2.value) / 1094
        } else if (unit2.value === "Yard") {
            return;
        } else {
            inp1.value = parseFloat(inp2.value) * 3
        }
    } else {
        if (unit1.value === "Meter") {
            inp1.value = parseFloat(inp2.value) / 3.281
        } else if (unit2.value === "Kilometre") {
            inp1.value = parseFloat(inp2.value) / 3281
        } else if (unit2.value === "Yard") {
            inp1.value = parseFloat(inp2.value) / 3
        } else {
            return
        }
    }
}

function select1() {
    if(unit1.value === unit2.value) {
        message.innerHTML = "Please select different messurement unit"
        inp2.value = ''
        inp1.value = ''
    }
    else {
        message.innerHTML = ""
        input1()
    }
}
function select2() {
    if(unit1.value === unit2.value) {
        message.innerHTML = "Please select different messurement unit"
        inp2.value = ''
        inp1.value = ''
    }
    else {
        message.innerHTML = ""
        input2()
    }
}