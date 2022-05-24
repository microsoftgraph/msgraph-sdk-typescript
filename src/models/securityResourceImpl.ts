import {SecurityResource} from './securityResource';
import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityResourceImpl implements AdditionalDataHolder, Parsable, SecurityResource {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the resource that is related to current alert. Required. */
    public resource?: string | undefined;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related. */
    public resourceType?: SecurityResourceType | undefined;
    /**
     * Instantiates a new securityResource and sets the default values.
     * @param securityResourceParameterValue 
     */
    public constructor(securityResourceParameterValue?: SecurityResource | undefined) {
        this.additionalData = securityResourceParameterValue?.additionalData ? securityResourceParameterValue?.additionalData! : {}
        this.resource = securityResourceParameterValue?.resource ;
        this.resourceType = securityResourceParameterValue?.resourceType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "resource": n => { this.resource = n.getStringValue(); },
            "resourceType": n => { this.resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resource){
        writer.writeStringValue("resource", this.resource);
        }
        if(this.resourceType){
        writer.writeEnumValue<SecurityResourceType>("resourceType", this.resourceType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
