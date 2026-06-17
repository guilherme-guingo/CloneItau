import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ActionCard from '../components/ActionCard';
import BottomMenuItem from '../components/BottomMenuItem';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.orangeHeader}>
        <View style={styles.topBar}>
          <View style={styles.profileBadge}>
            <Text style={styles.profileBadgeText}>GG</Text>
            <Text style={styles.profileName}>Guilherme</Text>
          </View>
          <View style={styles.headerIcons}>
            <Feather name="search" size={24} color="#FFFFFF" style={styles.iconMargin} />
            <Feather name="bell" size={24} color="#FFFFFF" style={styles.iconMargin} />
            <MaterialCommunityIcons name="chat-processing-outline" size={24} color="#FFFFFF" />
          </View>
        </View>
        <Text style={styles.welcomeText}>Olá, que bom te ver por aqui!</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.dragIndicatorContainer}>
          <View style={styles.dragIndicator} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Meu Itaú</Text>
            <Feather name="eye" size={20} color="#333333" />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <ActionCard 
              icon={<MaterialCommunityIcons name="rhombus-split" size={24} color="#EC7000" />} 
              title="Pix e transferir" 
            />
            <ActionCard 
              icon={<MaterialCommunityIcons name="barcode" size={24} color="#EC7000" />} 
              title="Pagar" 
            />
            <ActionCard 
              icon={<MaterialCommunityIcons name="credit-card-outline" size={24} color="#EC7000" />} 
              title="Cartão virtual" 
            />
            <ActionCard 
              icon={<MaterialCommunityIcons name="piggy-bank-outline" size={24} color="#EC7000" />} 
              title="Cofrinhos" 
            />
            <ActionCard 
              icon={<MaterialCommunityIcons name="shield-check-outline" size={24} color="#EC7000" />} 
              title="Segurança" 
            />
          </ScrollView>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Ionicons name="wallet-outline" size={20} color="#1E3A8A" />
                <Text style={styles.cardTitle}>Conta corrente</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#999999" />
            </View>
            <Text style={styles.balanceLabel}>Saldo</Text>
            <Text style={styles.balanceValue}>R$ 890,00</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.cardFooter}>
              <Text style={styles.limitText}>Limite da Conta</Text>
              <Feather name="chevron-right" size={20} color="#999999" />
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Feather name="credit-card" size={20} color="#333333" />
                <Text style={styles.cardTitle}>Cartão de crédito</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#999999" />
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Feather name="trending-up" size={20} color="#333333" />
                <Text style={styles.cardTitle}>Investimentos</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#999999" />
            </View>
            <Text style={styles.cardDescription}>
              Guarde seu dinheiro em Cofrinhos que rendem todo dia útil.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <MaterialCommunityIcons name="cash-plus" size={20} color="#333333" />
                <Text style={styles.cardTitle}>Crédito</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#999999" />
            </View>
            <Text style={styles.cardDescription}>
              Conheça as opções de crédito e acesse seus produtos contratados.
            </Text>
          </View>

        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <BottomMenuItem icon={<MaterialCommunityIcons name="home-variant" size={26} color="#EC7000" />} label="Início" isActive={true} />
        <BottomMenuItem icon={<MaterialCommunityIcons name="text-box-outline" size={26} color="#666666" />} label="Extrato" />
        <BottomMenuItem icon={<MaterialCommunityIcons name="swap-horizontal" size={26} color="#666666" />} label="Pagamentos" />
        <BottomMenuItem icon={<MaterialCommunityIcons name="shopping-outline" size={26} color="#666666" />} label="Produtos" />
        <BottomMenuItem icon={<Feather name="grid" size={26} color="#666666" />} label="Menu" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EC7000',
  },
  orangeHeader: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  profileBadgeText: {
    backgroundColor: '#FFFFFF',
    color: '#EC7000',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 4,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 8,
  },
  profileName: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginRight: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  dragIndicatorContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  dragIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#DDDDDD',
    borderRadius: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  horizontalScroll: {
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginLeft: 12,
  },
  cardDescription: {
    fontSize: 15,
    color: '#666666',
    marginTop: 8,
    lineHeight: 22,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  limitText: {
    fontSize: 14,
    color: '#666666',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
});