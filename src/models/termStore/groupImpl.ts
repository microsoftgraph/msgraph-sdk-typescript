import {EntityImpl} from '../';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Group} from './group';
import {SetImpl} from './index';
import {Set} from './set';
import {TermGroupScope} from './termGroupScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class GroupImpl extends EntityImpl implements Group, Parsable {
    /** Date and time of the group creation. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Description that gives details on the term usage. */
    public description?: string | undefined;
    /** Name of the group. */
    public displayName?: string | undefined;
    /** ID of the parent site of this group. */
    public parentSiteId?: string | undefined;
    /** Returns the type of the group. Possible values are global, system, and siteCollection. */
    public scope?: TermGroupScope | undefined;
    /** All sets under the group in a term [store]. */
    public sets?: Set[] | undefined;
    /**
     * Instantiates a new group and sets the default values.
     * @param groupParameterValue 
     */
    public constructor(groupParameterValue?: Group | undefined) {
        super();
        this.createdDateTime = groupParameterValue?.createdDateTime ;
        this.description = groupParameterValue?.description ;
        this.displayName = groupParameterValue?.displayName ;
        this.parentSiteId = groupParameterValue?.parentSiteId ;
        this.scope = groupParameterValue?.scope ;
        this.sets = groupParameterValue?.sets ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "parentSiteId": n => { this.parentSiteId = n.getStringValue(); },
            "scope": n => { this.scope = n.getEnumValue<TermGroupScope>(TermGroupScope); },
            "sets": n => { this.sets = n.getCollectionOfObjectValues<SetImpl>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.parentSiteId){
        writer.writeStringValue("parentSiteId", this.parentSiteId);
        }
        if(this.scope){
        writer.writeEnumValue<TermGroupScope>("scope", this.scope);
        }
        if(this.sets && this.sets.length != 0){        const setsArrValue: SetImpl[] = []; this.sets?.forEach(element => {setsArrValue.push(new SetImpl(element));});
        writer.writeCollectionOfObjectValues<SetImpl>("sets", setsArrValue);
        }
    };
}
