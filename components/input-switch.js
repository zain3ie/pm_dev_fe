import { Switch } from "@headlessui/react";

export default function InputSwitch({ label, value, setValue, processing }) {
    return (
        <Switch.Group>
            <div className="flex items-center py-3 space-x-4">
                <Switch.Label className="w-5/6 text-right md:w-1/2 sm:w-3/4">{label}</Switch.Label>
                <Switch
                    checked={value}
                    onChange={setValue}
                    className={`${value ? 'bg-blue-500 disabled:bg-blue-100' : 'bg-gray-200 disabled:bg-gray-100'} relative inline-flex h-6 w-11 items-center rounded-full`}
                    disabled={processing}
                >
                    <span className={`${value ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
                </Switch>
            </div>
        </Switch.Group>
    )
}