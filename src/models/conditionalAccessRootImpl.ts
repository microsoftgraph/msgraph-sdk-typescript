import {ConditionalAccessPolicy} from './conditionalAccessPolicy';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {createConditionalAccessPolicyFromDiscriminatorValue} from './createConditionalAccessPolicyFromDiscriminatorValue';
import {createNamedLocationFromDiscriminatorValue} from './createNamedLocationFromDiscriminatorValue';
import {ConditionalAccessPolicyImpl, EntityImpl, NamedLocationImpl} from './index';
import {NamedLocation} from './namedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class ConditionalAccessRootImpl extends EntityImpl implements ConditionalAccessRoot, Parsable {
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    public namedLocations?: NamedLocation[] | undefined;
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access policies. */
    public policies?: ConditionalAccessPolicy[] | undefined;
    /**
     * Instantiates a new conditionalAccessRoot and sets the default values.
     * @param conditionalAccessRootParameterValue 
     */
    public constructor(conditionalAccessRootParameterValue?: ConditionalAccessRoot | undefined) {
        super();
        this.namedLocations = conditionalAccessRootParameterValue?.namedLocations ;
        this.policies = conditionalAccessRootParameterValue?.policies ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "namedLocations": n => { this.namedLocations = n.getCollectionOfObjectValues<NamedLocationImpl>(createNamedLocationFromDiscriminatorValue); },
            "policies": n => { this.policies = n.getCollectionOfObjectValues<ConditionalAccessPolicyImpl>(createConditionalAccessPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.namedLocations && this.namedLocations.length != 0){        const namedLocationsArrValue: NamedLocationImpl[] = []; this.namedLocations?.forEach(element => {namedLocationsArrValue.push(new NamedLocationImpl(element));});
        writer.writeCollectionOfObjectValues<NamedLocationImpl>("namedLocations", namedLocationsArrValue);
        }
        if(this.policies && this.policies.length != 0){        const policiesArrValue: ConditionalAccessPolicyImpl[] = []; this.policies?.forEach(element => {policiesArrValue.push(new ConditionalAccessPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicyImpl>("policies", policiesArrValue);
        }
    };
}
