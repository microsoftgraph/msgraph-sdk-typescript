import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {WindowsMobileMSI} from './windowsMobileMSI';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMobileMSI(windowsMobileMSI: WindowsMobileMSI | undefined = {} as WindowsMobileMSI) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsMobileMSI),
        "commandLine": n => { windowsMobileMSI.commandLine = n.getStringValue(); },
        "ignoreVersionDetection": n => { windowsMobileMSI.ignoreVersionDetection = n.getBooleanValue(); },
        "productCode": n => { windowsMobileMSI.productCode = n.getStringValue(); },
        "productVersion": n => { windowsMobileMSI.productVersion = n.getStringValue(); },
    }
}
