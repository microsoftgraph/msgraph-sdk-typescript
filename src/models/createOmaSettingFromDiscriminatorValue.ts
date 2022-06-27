import {OmaSettingBase64Impl, OmaSettingBooleanImpl, OmaSettingDateTimeImpl, OmaSettingFloatingPointImpl, OmaSettingImpl, OmaSettingIntegerImpl, OmaSettingStringImpl, OmaSettingStringXmlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.omaSettingBase64":
                    return new OmaSettingBase64Impl();
                case "#microsoft.graph.omaSettingBoolean":
                    return new OmaSettingBooleanImpl();
                case "#microsoft.graph.omaSettingDateTime":
                    return new OmaSettingDateTimeImpl();
                case "#microsoft.graph.omaSettingFloatingPoint":
                    return new OmaSettingFloatingPointImpl();
                case "#microsoft.graph.omaSettingInteger":
                    return new OmaSettingIntegerImpl();
                case "#microsoft.graph.omaSettingString":
                    return new OmaSettingStringImpl();
                case "#microsoft.graph.omaSettingStringXml":
                    return new OmaSettingStringXmlImpl();
            }
        }
    }
    return new OmaSettingImpl();
}
