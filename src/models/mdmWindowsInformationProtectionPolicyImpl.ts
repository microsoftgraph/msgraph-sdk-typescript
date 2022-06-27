import {WindowsInformationProtectionImpl} from './index';
import {MdmWindowsInformationProtectionPolicy} from './mdmWindowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MdmWindowsInformationProtectionPolicyImpl extends WindowsInformationProtectionImpl implements MdmWindowsInformationProtectionPolicy {
    /**
     * Instantiates a new MdmWindowsInformationProtectionPolicy and sets the default values.
     * @param mdmWindowsInformationProtectionPolicyParameterValue 
     */
    public constructor(mdmWindowsInformationProtectionPolicyParameterValue?: MdmWindowsInformationProtectionPolicy | undefined) {
        super(mdmWindowsInformationProtectionPolicyParameterValue);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
