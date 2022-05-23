import {CloudAppSecuritySessionControl} from './cloudAppSecuritySessionControl';
import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControlImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class CloudAppSecuritySessionControlImpl extends ConditionalAccessSessionControlImpl implements CloudAppSecuritySessionControl, Parsable {
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps. */
    public cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
    /**
     * Instantiates a new cloudAppSecuritySessionControl and sets the default values.
     * @param cloudAppSecuritySessionControlParameterValue 
     */
    public constructor(cloudAppSecuritySessionControlParameterValue?: CloudAppSecuritySessionControl | undefined) {
        super();
        this.cloudAppSecurityType = cloudAppSecuritySessionControlParameterValue?.cloudAppSecurityType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "cloudAppSecurityType": n => { this.cloudAppSecurityType = n.getEnumValue<CloudAppSecuritySessionControlType>(CloudAppSecuritySessionControlType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.cloudAppSecurityType){
        writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", this.cloudAppSecurityType);
        }
    };
}
