let input = document.querySelector('.resume-input')
let btn = document.querySelector('.analyze-btn')
let result = document.querySelector('.result')

btn.addEventListener('click', function(){
    let score = 0
    let text = input.value.toLowerCase()
    let suggestions = []
    let strengths = []
    let weaknesses = []

        if (text.trim() === ''){
        return alert('enter text')
    }

    if (text.includes('skills')){
        score += 20
        strengths.push('skills section found')
    } else {
        weaknesses.push('Missing skills section')
    }

    
if (text.includes('experience')) {
    score += 20
    strengths.push('Experience section found')
} else {
    weaknesses.push('Missing Experience section')
}
if (text.includes('projects')) {
    score += 20
    strengths.push('Projects section found')
} else {
    weaknesses.push('Missing Projects section')
}      
if (text.includes('education')) {
    score += 20
    strengths.push('Education section found')
} else {
    weaknesses.push('Missing Education section')
}
if (text.includes('built') || text.includes('managed')) {
    score += 20
    strengths.push('Strong action verbs used')
} else {
    weaknesses.push('Weak action language')
}
    if (!text.includes('projects')) {
        
        suggestions.push('add projects sections')}

    if (!text.includes('skills')) suggestions.push('Add Skills section')
    if (!text.includes('experience')) suggestions.push('Add Experience section')
    if (!text.includes('education')) suggestions.push('Add Education section')
    if (!text.includes('built') && !text.includes('managed')) {
   suggestions.push('Use action verbs like built, managed, created')
    }
    result.innerHTML = `
    <h2>Score: ${score}/100</h2>

<h3>Strengths ✅</h3>
<p>${strengths.join('<br>')}</p>

<h3>Weaknesses ⚠️</h3>
<p>${weaknesses.join('<br>')}</p>

<h3>Suggestions 💡</h3>
<p>${suggestions.join('<br>')}</p>`
})
