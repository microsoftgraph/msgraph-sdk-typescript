import {OmaSetting, OmaSettingBase64, OmaSettingBoolean, OmaSettingDateTime, OmaSettingFloatingPoint, OmaSettingInteger, OmaSettingString, OmaSettingStringXml} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.omaSettingBase64":
                    return new OmaSettingBase64();
                case "#microsoft.graph.omaSettingBoolean":
                    return new OmaSettingBoolean();
                case "#microsoft.graph.omaSettingDateTime":
                    return new OmaSettingDateTime();
                case "#microsoft.graph.omaSettingFloatingPoint":
                    return new OmaSettingFloatingPoint();
                case "#microsoft.graph.omaSettingInteger":
                    return new OmaSettingInteger();
                case "#microsoft.graph.omaSettingString":
                    return new OmaSettingString();
                case "#microsoft.graph.omaSettingStringXml":
                    return new OmaSettingStringXml();
            }
        }
    }
    return new OmaSetting();
}
