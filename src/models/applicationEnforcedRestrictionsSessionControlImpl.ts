import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {ConditionalAccessSessionControlImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class ApplicationEnforcedRestrictionsSessionControlImpl extends ConditionalAccessSessionControlImpl implements ApplicationEnforcedRestrictionsSessionControl, Parsable {
    /**
     * Instantiates a new applicationEnforcedRestrictionsSessionControl and sets the default values.
     * @param applicationEnforcedRestrictionsSessionControlParameterValue 
     */
    public constructor(applicationEnforcedRestrictionsSessionControlParameterValue?: ApplicationEnforcedRestrictionsSessionControl | undefined) {
        super();
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
