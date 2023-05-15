import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileContainedApp} from './mobileContainedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileContainedApp(mobileContainedApp: MobileContainedApp | undefined = {} as MobileContainedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileContainedApp),
    }
}
