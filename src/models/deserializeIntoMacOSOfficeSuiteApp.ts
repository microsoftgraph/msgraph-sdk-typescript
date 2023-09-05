import { deserializeIntoMobileApp } from './deserializeIntoMobileApp';
import { type MacOSOfficeSuiteApp } from './macOSOfficeSuiteApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSOfficeSuiteApp(macOSOfficeSuiteApp: MacOSOfficeSuiteApp | undefined = {} as MacOSOfficeSuiteApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(macOSOfficeSuiteApp),
    }
}
