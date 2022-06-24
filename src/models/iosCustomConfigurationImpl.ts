import {DeviceConfigurationImpl} from './index';
import {IosCustomConfiguration} from './iosCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCustomConfigurationImpl extends DeviceConfigurationImpl implements IosCustomConfiguration {
    /** Payload. (UTF8 encoded byte array) */
    public payload?: string | undefined;
    /** Payload file name (.mobileconfig */
    public payloadFileName?: string | undefined;
    /** Name that is displayed to the user. */
    public payloadName?: string | undefined;
    /**
     * Instantiates a new IosCustomConfiguration and sets the default values.
     * @param iosCustomConfigurationParameterValue 
     */
    public constructor(iosCustomConfigurationParameterValue?: IosCustomConfiguration | undefined) {
        super(iosCustomConfigurationParameterValue);
        this.payload = iosCustomConfigurationParameterValue?.payload;
        this.payloadFileName = iosCustomConfigurationParameterValue?.payloadFileName;
        this.payloadName = iosCustomConfigurationParameterValue?.payloadName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "payload": n => { this.payload = n.getStringValue(); },
            "payloadFileName": n => { this.payloadFileName = n.getStringValue(); },
            "payloadName": n => { this.payloadName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.payload){
            writer.writeStringValue("payload", this.payload);
        }
        if(this.payloadFileName){
            writer.writeStringValue("payloadFileName", this.payloadFileName);
        }
        if(this.payloadName){
            writer.writeStringValue("payloadName", this.payloadName);
        }
    };
}
