import {CloudAppSecuritySessionControlType} from './cloudAppSecuritySessionControlType';
import {ConditionalAccessSessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecuritySessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps. */
    private _cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
    /**
     * Gets the cloudAppSecurityType property value. Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps.
     * @returns a cloudAppSecuritySessionControlType
     */
    public get cloudAppSecurityType() {
        return this._cloudAppSecurityType;
    };
    /**
     * Sets the cloudAppSecurityType property value. Possible values are: mcasConfigured, monitorOnly, blockDownloads. To learn more about these values, Deploy Conditional Access App Control for featured apps.
     * @param value Value to set for the cloudAppSecurityType property.
     */
    public set cloudAppSecurityType(value: CloudAppSecuritySessionControlType | undefined) {
        this._cloudAppSecurityType = value;
    };
    /**
     * Instantiates a new CloudAppSecuritySessionControl and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.cloudAppSecuritySessionControl";
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
        writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", this.cloudAppSecurityType);
    };
}
