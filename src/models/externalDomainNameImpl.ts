import {ExternalDomainName} from './externalDomainName';
import {EntityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class ExternalDomainNameImpl extends EntityImpl implements ExternalDomainName {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new externalDomainName and sets the default values.
     * @param externalDomainNameParameterValue 
     */
    public constructor(externalDomainNameParameterValue?: ExternalDomainName | undefined) {
        super(externalDomainNameParameterValue);
        this.additionalData = externalDomainNameParameterValue?.additionalData ? externalDomainNameParameterValue?.additionalData! : {};
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
        writer.writeAdditionalData(this.additionalData);
    };
}
