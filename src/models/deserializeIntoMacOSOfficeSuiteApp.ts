import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {MacOSOfficeSuiteApp} from './macOSOfficeSuiteApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSOfficeSuiteApp(macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {} as MacOSOfficeSuiteApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSOfficeSuiteApp),
    }
}
