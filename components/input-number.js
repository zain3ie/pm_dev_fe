export default function InputNumber({ label, value, setValue, min, max, processing }) {
    return (
        <div className="flex items-center py-3 space-x-4">
            <div className="w-5/6 text-right md:w-1/2 sm:w-3/4">{label}</div>
            <input
                type="number"
                className="px-3 py-2 rounded g-white ring-1 ring-gray-200 hover:ring-blue-400 focus:ring-blue-400"
                value={value}
                onChange={(e) => {setValue(e.target.valueAsNumber)}}
                min={min}
                max={max}
                disabled={processing}
                required
            />
        </div>
    )
}