import {EntityImpl} from '../';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {Group} from './group';
import {GroupImpl, SetImpl} from './index';
import {Set} from './set';
import {Store} from './store';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class StoreImpl extends EntityImpl implements Parsable, Store {
    /** Default language of the term store. */
    public defaultLanguageTag?: string | undefined;
    /** Collection of all groups available in the term store. */
    public groups?: Group[] | undefined;
    /** List of languages for the term store. */
    public languageTags?: string[] | undefined;
    /** Collection of all sets available in the term store. */
    public sets?: Set[] | undefined;
    /**
     * Instantiates a new store and sets the default values.
     * @param storeParameterValue 
     */
    public constructor(storeParameterValue?: Store | undefined) {
        super();
        this.defaultLanguageTag = storeParameterValue?.defaultLanguageTag ;
        this.groups = storeParameterValue?.groups ;
        this.languageTags = storeParameterValue?.languageTags ;
        this.sets = storeParameterValue?.sets ;
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
        if(this.groups && this.groups.length != 0){        const groupsArrValue: GroupImpl[] = []; this.groups?.forEach(element => {groupsArrValue.push(new GroupImpl(element));});
        writer.writeCollectionOfObjectValues<GroupImpl>("groups", groupsArrValue);
        }
        if(this.languageTags){
        writer.writeCollectionOfPrimitiveValues<string>("languageTags", this.languageTags);
        }
        if(this.sets && this.sets.length != 0){        const setsArrValue: SetImpl[] = []; this.sets?.forEach(element => {setsArrValue.push(new SetImpl(element));});
        writer.writeCollectionOfObjectValues<SetImpl>("sets", setsArrValue);
        }
    };
}
