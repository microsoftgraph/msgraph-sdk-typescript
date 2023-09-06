import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MobileContainedApp } from './mobileContainedApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileContainedApp(mobileContainedApp: MobileContainedApp | undefined = {} as MobileContainedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileContainedApp),
    }
}
