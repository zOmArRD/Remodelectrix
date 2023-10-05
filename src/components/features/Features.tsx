import {BriefcaseIcon, BuildingStorefrontIcon, HomeModernIcon} from '@heroicons/react/24/outline'
import './features.css'
import {useTranslation} from "react-i18next";

export default function Features() {
    const {t} = useTranslation();

    const features = [
        {
            name: t('features.residential.name'),
            description: t('features.residential.description'),
            icon: HomeModernIcon,
        },
        {
            name: t('features.commercial.name'),
            description: t('features.commercial.description'),
            icon: BuildingStorefrontIcon,
        },
        {
            name: t('features.industrial.name'),
            description: t('features.industrial.description'),
            icon: BriefcaseIcon,
        }
    ]

    return (
        <div className="features py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div id="learn_more" className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 t-green-600">{t('features.title')}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight t-gray-900 sm:text-4xl">
                        {t('features.slogan')}
                    </p>
                    <p className="mt-6 text-lg leading-8 t-gray-600">
                        {t('features.slogan_desc')}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 t-gray-900">
                                    <div
                                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 t-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
