import {EntityImpl} from './index';
import {Store} from './store';
import {GroupImpl, SetImpl} from './termStore/';
import {createGroupFromDiscriminatorValue} from './termStore/createGroupFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {Group} from './termStore/group';
import {Set} from './termStore/set';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StoreImpl extends EntityImpl implements Store {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Default language of the term store. */
    public defaultLanguageTag?: string | undefined;
    /** Collection of all groups available in the term store. */
    public groups?: Group[] | undefined;
    /** List of languages for the term store. */
    public languageTags?: string[] | undefined;
    /** Collection of all sets available in the term store. */
    public sets?: Set[] | undefined;
    /**
     * Instantiates a new Store and sets the default values.
     * @param storeParameterValue 
     */
    public constructor(storeParameterValue?: Store | undefined) {
        super(storeParameterValue);
        this.additionalData = storeParameterValue?.additionalData ? storeParameterValue?.additionalData! : {};
        this.defaultLanguageTag = storeParameterValue?.defaultLanguageTag;
        const groupsArrValue: GroupImpl[] = []; storeParameterValue.groups?.forEach(element => {groupsArrValue.push(element instanceof GroupImpl? element : new GroupImpl(element));});
        this.groups = groupsArrValue;
        this.languageTags = storeParameterValue?.languageTags;
        const setsArrValue: SetImpl[] = []; storeParameterValue.sets?.forEach(element => {setsArrValue.push(element instanceof SetImpl? element : new SetImpl(element));});
        this.sets = setsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultLanguageTag": n => { this.defaultLanguageTag = n.getStringValue(); },
            "groups": n => { this.groups = n.getCollectionOfObjectValues<GroupImpl>(createGroupFromDiscriminatorValue); },
            "languageTags": n => { this.languageTags = n.getCollectionOfPrimitiveValues<string>(); },
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
        if(this.defaultLanguageTag){
            writer.writeStringValue("defaultLanguageTag", this.defaultLanguageTag);
        }
        if(this.groups && this.groups.length != 0){        const groupsArrValue: GroupImpl[] = []; this.groups?.forEach(element => {groupsArrValue.push(element instanceof GroupImpl? element : new GroupImpl(element));});
            writer.writeCollectionOfObjectValues<GroupImpl>("groups", groupsArrValue);
        }
        if(this.languageTags){
            writer.writeCollectionOfPrimitiveValues<string>("languageTags", this.languageTags);
        }
        if(this.sets && this.sets.length != 0){        const setsArrValue: SetImpl[] = []; this.sets?.forEach(element => {setsArrValue.push(element instanceof SetImpl? element : new SetImpl(element));});
            writer.writeCollectionOfObjectValues<SetImpl>("sets", setsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
