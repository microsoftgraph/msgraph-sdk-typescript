import {ExternalDomainName} from './externalDomainName';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class ExternalDomainNameImpl extends EntityImpl implements ExternalDomainName {
    /**
     * Instantiates a new externalDomainName and sets the default values.
     * @param externalDomainNameParameterValue 
     */
    public constructor(externalDomainNameParameterValue?: ExternalDomainName | undefined) {
        super(externalDomainNameParameterValue);
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
