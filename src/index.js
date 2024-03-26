import domReady from '@wordpress/dom-ready'
import { createRoot, useEffect, useState } from '@wordpress/element'
import { storeSettings } from './admin/settings/utils/utils';
// import { useIsMount } from './admin/settings/hooks/useIsMount';
// import './style.scss';
// import { Container } from "./containers/containers";

const app = document.getElementById(vivviBuild.root_id);
const footer = document.getElementById('wpfooter');
const root = createRoot(app);

const Container = () => {

	const settingsBrand = [
		{
			id: 'vivvi_brand_data',
			value: ''
		}
	];

	const [settings, setSettings] = useState(settingsBrand);
	const [inputValue, setInputValue] = useState('');


	const handleSavedata = (item, value) => {

		const newSettings = settingsBrand.map(setting => {
			if (setting.id === item) {
				setting.value = value
			}
			return setting;
		})

		setSettings(newSettings);
	}

	const handleInputData = (e) => {
		setInputValue(e.target.value);
	}

	// const isMount = useIsMount();

	// console.log(inputValue);

	useEffect(() => {
		// if (isMount) return;
		storeSettings(settings);
	}, [settings])


	return (<>

		<h1>{'' === inputValue ? 'TEST Input' : inputValue}</h1>

		<input type='text' value={inputValue} onChange={handleInputData} />

		<button onClick={() => handleSavedata('vivvi_brand_data', inputValue)}>Send</button>

	</>)
}

// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
// 	{
// 		name: 'Push to deploy.',
// 		description:
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
// 		icon: "",
// 	},
// 	{
// 		name: 'SSL certificates.',
// 		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
// 		icon: "",
// 	},
// 	{
// 		name: 'Database backups.',
// 		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
// 		icon: "",
// 	},
// ]

const Container2 = () => {
	return (
		<div className="overflow-hidden bg-red-400 bg py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
								iste dolor cupiditate blanditiis ratione.
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								<h1>Test</h1>
							</dl>
						</div>
					</div>
					<img
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="Product screenshot"
						className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
						width={2432}
						height={1442}
					/>
				</div>
			</div>
		</div>
	)
}


domReady(() => {
	if ('undefined' !== typeof app && null !== app) {
		root.render(<Container2 />);
	}
	footer.remove();
})
