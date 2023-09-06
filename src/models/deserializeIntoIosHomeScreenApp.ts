import { deserializeIntoIosHomeScreenItem } from './deserializeIntoIosHomeScreenItem';
import { type IosHomeScreenApp } from './iosHomeScreenApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenApp(iosHomeScreenApp: IosHomeScreenApp | undefined = {} as IosHomeScreenApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIosHomeScreenItem(iosHomeScreenApp),
        "bundleID": n => { iosHomeScreenApp.bundleID = n.getStringValue(); },
    }
}
