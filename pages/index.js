import axios from "axios"
import { useState } from "react";
import InputNumber from "../components/input-number";
import InputSwitch from "../components/input-switch";


export default function Home() {
    const [patientAge, setPatientAge] = useState(18)
    const [previousIvf, setPreviousIvf] = useState(0)
    const [ivfPregnancies, setIvfPregnancies] = useState(0)
    const [liveBirths, setLiveBirths] = useState(0)
    const [femalePrimary, setFemalePrimary] = useState(false)
    const [femaleSecondary, setFemaleSecondary] = useState(false)
    const [malePrimary, setMalePrimary] = useState(false)
    const [maleSecondary, setMaleSecondary] = useState(false)
    const [couplePrimary, setCouplePrimary] = useState(false)
    const [coupleSecondary, setCoupleSecondary] = useState(false)
    const [tubalDesease, setTubalDesease] = useState(false)
    const [ovulatoryDisorder, setOvulatoryDisorder] = useState(false)
    const [maleFactor, setMaleFactor] = useState(false)
    const [unexplained, setUnexplained] = useState(false)
    const [endometriosis, setEndometriosis] = useState(false)
    const [cervicalFactors, setCervicalFactors] = useState(false)
    const [spermConcentration, setSpermConcentration] = useState(false)
    const [spermMorphology, setSpermMorphology] = useState(false)
    const [spermMotility, setSpermMotility] = useState(false)
    const [freshCycle, setFreshCycle] = useState(false)
    const [frozenCycle, setFrozenCycle] = useState(false)
    const [eggsThawed, setEggsThawed] = useState(0)
    const [freshEggs, setFreshEggs] = useState(0)
    const [eggsMixed, setEggsMixed] = useState(0)
    const [embryosTransfered, setEmbryosTransfered] = useState(0)
    const [processing, setProcessing] = useState(false)
    const [result, setResult] = useState([])

    function predict() {
        setProcessing(true)

        const payload = [{
            patient_age: patientAge,
            previous_ivf: previousIvf,
            ivf_pregnancies: ivfPregnancies,
            live_births: liveBirths,
            female_primary: femalePrimary ? 1 : 0,
            female_secondary: femaleSecondary ? 1 : 0,
            male_primary: malePrimary ? 1 : 0,
            male_secondary: maleSecondary ? 1 : 0,
            couple_primary: couplePrimary ? 1 : 0,
            couple_secondary: coupleSecondary ? 1 : 0,
            tubal_desease: tubalDesease ? 1 : 0,
            ovulatory_disorder: ovulatoryDisorder ? 1 : 0,
            male_factor: maleFactor ? 1 : 0,
            unexplained: unexplained ? 1 : 0,
            endometriosis: endometriosis ? 1 : 0,
            cervical_factors: cervicalFactors ? 1 : 0,
            sperm_concentration: spermConcentration ? 1 : 0,
            sperm_morphology: spermMorphology ? 1 : 0,
            sperm_motility: spermMotility ? 1 : 0,
            fresh_cycle: freshCycle ? 1 : 0,
            frozen_cycle: frozenCycle ? 1 : 0,
            eggs_thawed: eggsThawed,
            fresh_eggs: freshEggs,
            eggs_mixed: eggsMixed,
            embryos_transfered: embryosTransfered
        }]

        axios.post('https://pmds-groupf.herokuapp.com/predict', payload).then(response => {
        // axios.post('http://127.0.0.1:8000/predict', payload).then(response => {
            setResult(response.data)
            setProcessing(false)
        });

    }

    return (
        <div className="flex p-2 text-sm antialiased text-gray-700 bg-blue-500">
            <div className="w-full p-6 bg-white rounded-md">
                <div className="p-4 text-2xl font-semibold text-center">
                    IVF Program Prediction
                </div>

                <hr className="m-2"></hr>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-1/2 lg:w-1/3">
                        <InputNumber
                            label="Patient Age at Treatment"
                            value={patientAge}
                            setValue={setPatientAge}
                            min="18"
                            max="50"
                            processing={processing}
                        />

                        <InputNumber
                            label="Total Number of Previous IVF Cycles"
                            value={previousIvf}
                            setValue={setPreviousIvf}
                            min="0"
                            max="10"
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/2 lg:w-1/3">
                        <InputNumber
                            label="Total Number of IVF Pregnancie"
                            value={ivfPregnancies}
                            setValue={setIvfPregnancies}
                            min="0"
                            max="10"
                            processing={processing}
                        />

                        <InputNumber
                            label="Total Number of Live Births - Conceived Through IVF"
                            value={liveBirths}
                            setValue={setLiveBirths}
                            min="0"
                            max="10"
                            processing={processing}
                        />
                    </div>
                </div>

                <hr className="m-2"></hr>

                <div className="p-4 text-lg font-semibold text-center">
                    Type of Infertility
                </div>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Female Primary"
                            value={femalePrimary}
                            setValue={setFemalePrimary}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Female Secondary"
                            value={femaleSecondary}
                            setValue={setFemaleSecondary}
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Male Primary"
                            value={malePrimary}
                            setValue={setMalePrimary}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Male Secondary"
                            value={maleSecondary}
                            setValue={setMaleSecondary}
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Couple Primary"
                            value={couplePrimary}
                            setValue={setCouplePrimary}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Couple Secondary"
                            value={coupleSecondary}
                            setValue={setCoupleSecondary}
                            processing={processing}
                        />
                    </div>
                </div>

                <hr className="m-2"></hr>

                <div className="p-4 text-lg font-semibold text-center">
                    Cause of Infertility
                </div>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Tubal disease"
                            value={tubalDesease}
                            setValue={setTubalDesease}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Ovulatory Disorder"
                            value={ovulatoryDisorder}
                            setValue={setOvulatoryDisorder}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Male Factor"
                            value={maleFactor}
                            setValue={setMaleFactor}
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Patient Unexplained"
                            value={unexplained}
                            setValue={setUnexplained}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Endometriosis"
                            value={endometriosis}
                            setValue={setEndometriosis}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Cervical Factors"
                            value={cervicalFactors}
                            setValue={setCervicalFactors}
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Partner Sperm Concentration"
                            value={spermConcentration}
                            setValue={setSpermConcentration}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Partner Sperm Morphology"
                            value={spermMorphology}
                            setValue={setSpermMorphology}
                            processing={processing}
                        />

                        <InputSwitch
                            label="Partner Sperm Motility"
                            value={spermMotility}
                            setValue={setSpermMotility}
                            processing={processing}
                        />
                    </div>
                </div>

                <hr className="m-2"></hr>

                <div className="p-4 text-lg font-semibold text-center">
                    Cycle
                </div>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Fresh Cycle"
                            value={freshCycle}
                            setValue={setFreshCycle}
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/3">
                        <InputSwitch
                            label="Frozen Cycle"
                            value={frozenCycle}
                            setValue={setFrozenCycle}
                            processing={processing}
                        />
                    </div>
                </div>

                <hr className="m-2"></hr>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col sm:w-1/2 md:w-1/3">
                        <InputNumber
                            label="Eggs Thawed"
                            value={eggsThawed}
                            setValue={setEggsThawed}
                            min="0"
                            max="36"
                            processing={processing}
                        />

                        <InputNumber
                            label="Fresh Eggs Collected"
                            value={freshEggs}
                            setValue={setFreshEggs}
                            min="0"
                            max="60"
                            processing={processing}
                        />
                    </div>

                    <div className="flex flex-col sm:w-1/2 md:w-1/3">
                        <InputNumber
                            label="Eggs Mixed With Partner Sperm"
                            value={eggsMixed}
                            setValue={setEggsMixed}
                            min="0"
                            max="60"
                            processing={processing}
                        />

                        <InputNumber
                            label="Embryos Transfered"
                            value={embryosTransfered}
                            setValue={setEmbryosTransfered}
                            min="0"
                            max="10"
                            processing={processing}
                        />
                    </div>
                </div>

                <hr className="m-2"></hr>

                <div className="flex justify-center p-4 space-x-10">
                    <button
                        type="submit"
                        onClick={predict}
                        className="justify-center w-64 px-4 py-2 font-semibold text-white bg-blue-500 border border-transparent rounded-md disabled:bg-gray-100 disabled:text-gray-700 group hover:bg-blue-600 focus:outline-none"
                        disabled={processing}
                    >
                        {processing ? "Predicting..." : "Predict"}
                    </button>

                    <div className="w-64 px-10 py-2 font-semibold rounded ring-1 ring-blue-400">
                        Prediction result = {result[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}
