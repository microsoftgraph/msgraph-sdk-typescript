import {PackageEscaped} from './packageEscaped';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPackageEscaped(packageEscaped: PackageEscaped | undefined = {} as PackageEscaped) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { packageEscaped.odataType = n.getStringValue(); },
        "type": n => { packageEscaped.type = n.getStringValue(); },
    }
}
