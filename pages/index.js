import axios from "axios"
import { useState } from "react";


export default function Home() {
    const [patientAge, setPatientAge] = useState(0)
    const [previousIvf, setPreviousIvf] = useState(0)
    const [ivfPregnancies, setIvfPregnancies] = useState(0)
    const [liveBirths, setLiveBirths] = useState(0)
    const [femalePrimary, setFemalePrimary] = useState(0)
    const [femaleSecondary, setFemaleSecondary] = useState(0)
    const [malePrimary, setMalePrimary] = useState(0)
    const [maleSecondary, setMaleSecondary] = useState(0)
    const [couplePrimary, setCouplePrimary] = useState(0)
    const [coupleSecondary, setCoupleSecondary] = useState(0)
    const [tubalDesease, setTubalDesease] = useState(0)
    const [ovulatoryDisorder, setOvulatoryDisorder] = useState(0)
    const [maleFactor, setMaleFactor] = useState(0)
    const [unexplained, setUnexplained] = useState(0)
    const [endometriosis, setEndometriosis] = useState(0)
    const [cervicalFactors, setCervicalFactors] = useState(0)
    const [spermConcentration, setSpermConcentration] = useState(0)
    const [spermMorphology, setSpermMorphology] = useState(0)
    const [spermMotility, setSpermMotility] = useState(0)
    const [freshCycle, setFreshCycle] = useState(0)
    const [frozenCycle, setFrozenCycle] = useState(0)
    const [eggsThawed, setEggsThawed] = useState(0)
    const [freshEggs, setFreshEggs] = useState(0)
    const [eggsMixed, setEggsMixed] = useState(0)
    const [embryosTransfered, setEmbryosTransfered] = useState(0)
    const [result, setResult] = useState([])

    function predict() {
        const payload = [{
            patient_age: patientAge,
            previous_ivf: previousIvf,
            ivf_pregnancies: ivfPregnancies,
            live_births: liveBirths,
            female_primary: femalePrimary,
            female_secondary: femaleSecondary,
            male_primary: malePrimary,
            male_secondary: maleSecondary,
            couple_primary: couplePrimary,
            couple_secondary: coupleSecondary,
            tubal_desease: tubalDesease,
            ovulatory_disorder: ovulatoryDisorder,
            male_factor: maleFactor,
            unexplained: unexplained,
            endometriosis: endometriosis,
            cervical_factors: cervicalFactors,
            sperm_concentration: spermConcentration,
            sperm_morphology: spermMorphology,
            sperm_motility: spermMotility,
            fresh_cycle: freshCycle,
            frozen_cycle: frozenCycle,
            eggs_thawed: eggsThawed,
            fresh_eggs: freshEggs,
            eggs_mixed: eggsMixed,
            embryos_transfered: embryosTransfered
        }]

        console.log(payload)

        axios.post('https://pmds-groupf.herokuapp.com/predict', payload).then(response => {
        // axios.post('http://127.0.0.1:8000/predict', payload).then(response => {
            setResult(response.data)
        });
    }

    return (
        <div className="flex p-10 text-sm antialiased text-gray-700 bg-white">
            <div class="space-y-6 w-1/2">
                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Patient Age at Treatment</div>
                    <input
                        type="number"
                        name="patient-age"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={patientAge}
                        onChange={(e) => {setPatientAge(e.target.valueAsNumber)}}
                        min="18"
                        max="50"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Total Number of Previous IVF Cycles</div>
                    <input
                        type="number"
                        name="previous-ivf"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={previousIvf}
                        onChange={(e) => {setPreviousIvf(e.target.valueAsNumber)}}
                        min="0"
                        max="10"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Total Number of IVF Pregnancie</div>
                    <input
                        type="number"
                        name="ivf-pregnancies"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={ivfPregnancies}
                        onChange={(e) => {setIvfPregnancies(e.target.valueAsNumber)}}
                        min="0"
                        max="10"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Total Number of Live Births - Conceived Through IVF</div>
                    <input
                        type="number"
                        name="live-births"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={liveBirths}
                        onChange={(e) => {setLiveBirths(e.target.valueAsNumber)}}
                        min="0"
                        max="10"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Female Primary</div>
                    <input
                        type="number"
                        name="female-primary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={femalePrimary}
                        onChange={(e) => {setFemalePrimary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Female Secondary</div>
                    <input
                        type="number"
                        name="female-secondary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={femaleSecondary}
                        onChange={(e) => {setFemaleSecondary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Male Primary</div>
                    <input
                        type="number"
                        name="male-primary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={malePrimary}
                        onChange={(e) => {setMalePrimary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Male Secondary</div>
                    <input
                        type="number"
                        name="male-secondary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={maleSecondary}
                        onChange={(e) => {setMaleSecondary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Couple Primary</div>
                    <input
                        type="number"
                        name="couple-primary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={couplePrimary}
                        onChange={(e) => {setCouplePrimary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Type of Infertility - Couple Secondary</div>
                    <input
                        type="number"
                        name="couple-secondary"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={coupleSecondary}
                        onChange={(e) => {setCoupleSecondary(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Tubal disease</div>
                    <input
                        type="number"
                        name="tubal-desease"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={tubalDesease}
                        onChange={(e) => {setTubalDesease(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Ovulatory Disorder</div>
                    <input
                        type="number"
                        name="ovulatory-disorder"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={ovulatoryDisorder}
                        onChange={(e) => {setOvulatoryDisorder(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Male Factor</div>
                    <input
                        type="number"
                        name="male-factor"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={maleFactor}
                        onChange={(e) => {setMaleFactor(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Patient Unexplained</div>
                    <input
                        type="number"
                        name="unexplained"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={unexplained}
                        onChange={(e) => {setUnexplained(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Endometriosis</div>
                    <input
                        type="number"
                        name="endometriosis"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={endometriosis}
                        onChange={(e) => {setEndometriosis(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Cervical factors</div>
                    <input
                        type="number"
                        name="cervical-factors"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={cervicalFactors}
                        onChange={(e) => {setCervicalFactors(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Partner Sperm Concentration</div>
                    <input
                        type="number"
                        name="sperm-concentration"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={spermConcentration}
                        onChange={(e) => {setSpermConcentration(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Partner Sperm Morphology</div>
                    <input
                        type="number"
                        name="sperm-morphology"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={spermMorphology}
                        onChange={(e) => {setSpermMorphology(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Cause of Infertility - Partner Sperm Motility</div>
                    <input
                        type="number"
                        name="sperm-motility"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={spermMotility}
                        onChange={(e) => {setSpermMotility(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Fresh Cycle</div>
                    <input
                        type="number"
                        name="fresh-cycle"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={freshCycle}
                        onChange={(e) => {setFreshCycle(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Frozen Cycle</div>
                    <input
                        type="number"
                        name="frozen-cycle"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={frozenCycle}
                        onChange={(e) => {setFrozenCycle(e.target.valueAsNumber)}}
                        min="0"
                        max="1"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Eggs Thawed</div>
                    <input
                        type="number"
                        name="eggs-thawed"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={eggsThawed}
                        onChange={(e) => {setEggsThawed(e.target.valueAsNumber)}}
                        min="0"
                        max="36"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Fresh Eggs Collected</div>
                    <input
                        type="number"
                        name="fresh-eggs"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={freshEggs}
                        onChange={(e) => {setFreshEggs(e.target.valueAsNumber)}}
                        min="0"
                        max="60"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Eggs Mixed With Partner Sperm</div>
                    <input
                        type="number"
                        name="eggs-mixed"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={eggsMixed}
                        onChange={(e) => {setEggsMixed(e.target.valueAsNumber)}}
                        min="0"
                        max="60"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <div className="text-right w-96">Embryos Transfered</div>
                    <input
                        type="number"
                        name="embryos-transfered"
                        className="w-32 px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                        value={embryosTransfered}
                        onChange={(e) => {setEmbryosTransfered(e.target.valueAsNumber)}}
                        min="0"
                        max="5"
                        required
                    />
                </div>

                <div className="flex items-center space-x-10">
                    <button
                        type="submit"
                        onClick={predict}
                        class="w-32 justify-center px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-600 focus:outline-none"
                    >
                        Predict
                    </button>

                    <div class="px-10 py-2 w-60 font-bold rounded g-white ring-1 ring-blue-400">Hasil prediksi = {result[0]}</div>
                </div>
            </div>
        </div>
    )
}
