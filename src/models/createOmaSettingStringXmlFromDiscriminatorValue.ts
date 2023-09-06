import { deserializeIntoOmaSettingStringXml } from './deserializeIntoOmaSettingStringXml';
import { type OmaSettingStringXml } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOmaSettingStringXmlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOmaSettingStringXml;
}
