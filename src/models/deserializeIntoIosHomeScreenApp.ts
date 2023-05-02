import {deserializeIntoIosHomeScreenItem} from './deserializeIntoIosHomeScreenItem';
import {IosHomeScreenApp} from './iosHomeScreenApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenApp(iosHomeScreenApp: IosHomeScreenApp | undefined = {} as IosHomeScreenApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIosHomeScreenItem(iosHomeScreenApp),
        "bundleID": n => { iosHomeScreenApp.bundleID = n.getStringValue(); },
    }
}
