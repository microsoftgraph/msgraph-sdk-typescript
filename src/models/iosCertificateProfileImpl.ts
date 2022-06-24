import {DeviceConfigurationImpl} from './index';
import {IosCertificateProfile} from './iosCertificateProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCertificateProfileImpl extends DeviceConfigurationImpl implements IosCertificateProfile {
    /**
     * Instantiates a new IosCertificateProfile and sets the default values.
     * @param iosCertificateProfileParameterValue 
     */
    public constructor(iosCertificateProfileParameterValue?: IosCertificateProfile | undefined) {
        super(iosCertificateProfileParameterValue);
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
