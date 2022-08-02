import {OmaSettingStringXml} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingStringXmlFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingStringXml {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingStringXml();
}
